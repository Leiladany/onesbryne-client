import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import eyeIcon1 from "/eye1.png";
import eyeIcon2 from "/eye2.png";
import "./SignupPage.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="auths-form-inputs">
          <label>
            Primeiro e Ultimo Nome
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
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

          <label>
            Confirmar Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              placeholder="Confirm Password"
              required
            />
          </label>
        </div>

        <div className="buttonSign-container">
          <button>Criar Conta</button>
        </div>

        <div>
          <p>Already have an account?</p>
          <Link to="/login">
            <p>Log in</p>
          </Link>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default SignupPage;
