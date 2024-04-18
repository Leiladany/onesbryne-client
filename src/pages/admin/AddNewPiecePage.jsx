/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "../../components/form/FormComponent";
import DataService from "../../components/DataService";
import { types, sizes } from "../../components/ClothesInfoArrays";

const AddOrEditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // States
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

// Function to handle file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImg(file);
  };

  // Function to handle the submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = { name, img, size, price, description, type };
    const apiPath = productId ? `/api/products/${productId}` : "/api/products";
    const method = productId ? "updateData" : "createData";
    try {
      const response = await DataService[method](apiPath, productData);
      if (response) {
        navigate("/admin");
      } else {
        setError("Failed to save the product. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const formInputs = [
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
      onChange: handleImageChange,
      required: true,
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
    <div id="page-container">
      <FormComponent
        type={productId ? "editPiece" : "addNewPiece"}
        inputs={formInputs}
        handleSubmit={handleSubmit}
        buttonText={productId ? "Update Product" : "Add Product"}
        error={error}
      />
    </div>
  );
};

export default AddOrEditProductPage;
