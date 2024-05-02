import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import FormComponent from "../../components/layout/form/Form";
import DataService from "../../components/services/DataService";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  const [data, setData] = useState({});
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [error, setError] = useState(null);

  const getUserById = async () => {
    try {
      const userData = await DataService.fetchData(`/api/users/${userId}`);
      if (userData) {
        setData(userData);
        setNewName(userData.user.name);
        setNewEmail(userData.user.email);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Failed to fetch user data.");
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    if (data) {
      const newData = {
        name: newName || data.user.name,
        email: newEmail || data.user.email,
      };

      try {
        const updatedUser = await DataService.updateData(
          `/api/users/${userId}`,
          newData
        );
        if (updatedUser) {
          setData(updatedUser);
          navigate("/clothes");
        } else {
          setError("Failed to update profile. Please try again.");
        }
      } catch (error) {
        console.error("Error updating user:", error);
        setError("Failed to update profile. Please try again.");
      }
    }
  };

  useEffect(() => {
    getUserById();
  }, [userId]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Form inputs
  const profileControls = [
    {
      label: "Name",
      type: "text",
      value: newName,
      onChange: (e) => setNewName(e.target.value),
      placeholder: "Tiago Gil",
      required: false,
    },
    {
      label: "Email",
      type: "email",
      value: newEmail,
      onChange: (e) => setNewEmail(e.target.value),
      placeholder: "exemplo@gmail.com",
      required: false,
    },
  ];

  return (
    <div id="container">
      <FormComponent
        controls={profileControls}
        handleSubmit={handleUpdateProfile}
        buttonText="Actualizar Conta"
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default ProfilePage;
