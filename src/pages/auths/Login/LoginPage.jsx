import { useContext, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import eyeIcon1 from "/eye1.png";
import eyeIcon2 from "/eye2.png";
import "./LoginPage.css";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 400) {
        const parsed = await response.json();

        if (parsed.message === "User not found") {
          setError("User not found. Please check your username.");
        } else if (parsed.message === "Invalid password") {
          setError("Invalid password. Please check your password.");
        } else {
          throw new Error(parsed.message);
        }
      }

      if (response.status === 200) {
        const parsed = await response.json();
        const { token, userId } = parsed;
        handleLogin(token, userId);
        navigate(`/`);
      }
    } catch (error) {
      console.log(error);
      setError("Failed to login. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="auths-form-inputs">
          <label>
            Email
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="blabla@bla.bla"
              required
            />
          </label>

          <label>
            Password
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="1234567"
              required
            />
            <img
              src={showPassword ? eyeIcon1 : eyeIcon2}
              alt="Toggle Password Visibility"
              className="toggle-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </label>
        </div>

        <div className="buttonLogin-container">
          <button>Log In</button>
        </div>
        {error && <p>{error}</p>}
      </form>
      <Footer />
    </div>
  );
};

export default LoginPage;
