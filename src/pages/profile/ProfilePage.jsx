import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import FormComponent from "../../components/form/FormComponent";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  const [data, setData] = useState({});
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState(null);

  const getUserById = async () => {
    try {
      if (userId) {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
          setNewName(data.user.name);
          setNewEmail(data.user.email);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      if (data) {
        const updateData = {
          name: newName || data.user.name,
          email: newEmail || data.user.email,
        };

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateData),
          }
        );
        if (response.ok) {
          navigate("/clothes");
        } else {
          setError("Failed to update profile. Please try again.");
        }
      }
    } catch (error) {
      console.log(error);
      setError("Failed to update profile. Please try again.");
    }
  };

  useEffect(() => {
    getUserById();
  }, [userId]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Form inputs
  const inputs = [
    {
      label: "Name",
      type: "text",
      value: newName,
      onChange: (e) => setNewName(e.target.value),
      placeholder: "Tiago Gil",
      required: "false",
    },
    {
      label: "Email",
      type: "email",
      value: newEmail,
      onChange: (e) => setNewEmail(e.target.value),
      placeholder: "exemplo@gmail.com",
      required: "false",
    },
  ];

  return (
    <div>
      <FormComponent
        inputs={inputs}
        handleSubmit={handleUpdateProfile}
        buttonText="Actualizar Conta"
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProfilePage;
