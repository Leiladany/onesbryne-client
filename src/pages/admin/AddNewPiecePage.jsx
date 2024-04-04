import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../components/form/FormComponent";
import DataService from "../../components/DataService";
import { types, sizes } from "../../components/ClothesInfoArrays";

const AddNewPiecePage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleCreateCloth = async (e) => {
    e.preventDefault();
    const payload = { name, img, size, price, description, type };

    try {
      const response = await DataService.createData("/api/products", payload);
      if (response) {
        navigate("/admin");
      } else {
        setError(
          response.message || "Failed to add new product. Please try again."
        );
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
    }
  };

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
      label: "Image URL",
      type: "text",
      value: img,
      onChange: (e) => setImg(e.target.value),
      placeholder: "http://example.com/image.jpg",
      required: true,
    },
    {
      label: "Size",
      type: "dropdown",
      value: size,
      onChange: (e) => setSize(e.target.value),
      options: sizes,
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
      options: types,
      required: true,
    },
  ];

  return (
    <div id="page-container">
      <FormComponent
        type="addNewPiece"
        inputs={formInputs}
        handleSubmit={handleCreateCloth}
        buttonText="Add Product"
        error={error}
      />
    </div>
  );
};

export default AddNewPiecePage;
