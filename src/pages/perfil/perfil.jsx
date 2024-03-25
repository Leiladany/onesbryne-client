import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import "./perfil.css";

const Perfil = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const payload = { name, email };

    if (currentPassword && newPassword) {
      payload.currentPassword = currentPassword;
      payload.newPassword = newPassword;
    }

    try {
      navigate("/");
    } catch (error) {
      setError("Failed to update profile. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <form className="perfil-form" onSubmit={handleUpdateProfile}>
        <div className="perfil-form-inputs">
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Current Password:
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
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
