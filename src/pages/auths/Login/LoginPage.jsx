import { useContext, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import eyeIcon1 from "/eye1.png";
import eyeIcon2 from "/eye2.png";
import "./LoginPage.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <form className="login-form" onSubmit={handleLogin}>
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
        <div>
          <p>Not registered?</p>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
