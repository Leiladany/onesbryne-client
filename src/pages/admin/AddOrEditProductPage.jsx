/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "../../components/layout/form/Form";
import DataService from "../../components/services/DataService";
import { types, sizes } from "../../components/utils/Arrays";

const API_URL = import.meta.env.VITE_API_URL;
const token = window.localStorage.getItem("authToken");

const AddOrEditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // States
  const [productData, setProductData] = useState({});
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  // Function to fetch a product
  const fetchProduct = async () => {
    try {
      const response = await DataService.fetchData(`/api/products/${productId}`);
      setProductData(response)
      setName(response.name);
      setImg(response.img);
      setSize(response.size);
      setPrice(response.price);
      setDescription(response.description);
      setType(response.type);
    } catch (error) {
      console.error("Failed to fetch product details.", error);
      setError("Failed to load the product data.");
    }
  };


  // Function to create a product
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", img);
    formData.append("size", size);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("type", type);

    try {
      const response = await fetch(`${API_URL}/api/products`, {
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to create product.');
      navigate("/admin");
    } catch (error) {
      setError("Failed to save the product. Please try again.");
      console.error("Creation error:", error);
    }
  };

  // Function to update a product
  const handleSubmitUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("img", img);
    formData.append("size", size);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("type", type);

    try {
      const response = await fetch(`${API_URL}/api/products/${productId}`, {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      });
      if (!response.ok) throw new Error('Failed to update product.');
      navigate("/admin");
    } catch (error) {
      setError("Failed to update the product. Please try again.");
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const formElements = [
    {
      label: "Name",
      type: "text",
      value: name,
      onChange: (e) => setName(e.target.value),
      placeholder: "Product Name",
      required: true,
    },
    {
      label: "Image",
      type: "file",
      onChange: (e) => setImg(e.target.files[0]),
      required: productId ? false : true,
    },
    {
      label: "Size",
      type: "dropdown",
      value: size,
      onChange: (e) => setSize(e.target.value),
      options: sizes.map(size => ({ value: size, label: size })),
      required: true,
    },
    {
      label: "Price",
      type: "number",
      value: price,
      onChange: (e) => setPrice(e.target.value),
      placeholder: "100",
      required: true,
    },
    {
      label: "Description",
      type: "text",
      value: description,
      onChange: (e) => setDescription(e.target.value),
      placeholder: "Description",
      required: true,
    },
    {
      label: "Type",
      type: "dropdown",
      value: type,
      onChange: (e) => setType(e.target.value),
      options: types.map(type => ({ value: type.type, label: type.type })),
      required: true,
    }
  ];

  return (
    <div id="container">
      <FormComponent
        type={productId ? "editPiece" : "addNewPiece"}
        controls={formElements}
        handleSubmit={productId ? handleSubmitUpdate : handleSubmitCreate}
        buttonText={productId ? "Update Product" : "Add Product"}
        error={error}
      />
    </div>
  );
};

export default AddOrEditProductPage;
