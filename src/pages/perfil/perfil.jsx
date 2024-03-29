import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./perfil.css";

const Perfil = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  const [user, setUser] = useState({});
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
          setUser(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: newName || user.name,
            email: newEmail || user.email,
            password: newPassword || user.password,
          }),
        }
      );
      if (response.ok) {
        navigate("/");
      } else {
        setError("Failed to update profile. Please try again.");
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
    console.log(user);
  }, [user]);

  return (
    <div>
      <Navbar />

      <form className="perfil-form" onSubmit={handleUpdateProfile}>
        <div className="perfil-form-inputs">
          <label>
            Name:
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
            />
          </label>

          <label>
            New Password:
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
        </div>

        <div className="perfil-form-buttons">
          <button type="submit">Update Profile</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      <Footer />
    </div>
  );
};

export default Perfil;
