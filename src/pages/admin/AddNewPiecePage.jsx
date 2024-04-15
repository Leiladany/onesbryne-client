import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormComponent from "../../components/form/FormComponent";
import DataService from "../../components/DataService";
import { types, sizes } from "../../components/ClothesInfoArrays";

const AddOrEditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  // States
  const [product, setProduct] = useState({
    name: "",
    img: "",
    size: "",
    price: "",
    description: "",
    type: ""
  });
  const [error, setError] = useState("");


  // Function to fetch a product
  const fetchProduct = async () => {
    try {
      const response = await DataService.fetchData(`/api/products/${productId}`);
      setProduct(response);
    } catch (error) {
      console.error("Failed to fetch product details.", error);
      setError("Failed to load the product data.");
    }
  };

  // Function to handle the submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiPath = productId ? `/api/products/${productId}` : "/api/products";
    const method = productId ? "updateData" : "createData";
    try {
      const response = await DataService[method](apiPath, product);
      if (response) {
        navigate("/admin");
      } else {
        setError("Failed to save the product. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
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
      value: product.name,
      onChange: handleChange,
      name: "name",
      placeholder: "Product Name",
      required: true,
    },
    {
      label: "Image URL",
      type: "text",
      value: product.img,
      onChange: handleChange,
      name: "img",
      placeholder: "http://example.com/image.jpg",
      required: true,
    },
    {
      label: "Size",
      type: "dropdown",
      value: product.size,
      onChange: handleChange,
      name: "size",
      options: sizes.map(size => ({ value: size, label: size })),
      required: true,
    },
    {
      label: "Price",
      type: "number",
      value: product.price,
      onChange: handleChange,
      name: "price",
      placeholder: "100",
      required: true,
    },
    {
      label: "Description",
      type: "text",
      value: product.description,
      onChange: handleChange,
      name: "description",
      placeholder: "Description",
      required: true,
    },
    {
      label: "Type",
      type: "dropdown",
      value: product.type,
      onChange: handleChange,
      name: "type",
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
