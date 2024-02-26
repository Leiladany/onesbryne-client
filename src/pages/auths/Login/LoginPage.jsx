import { useContext, useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import eyeIcon1 from "/eye1.png"; // Import eye1.png icon
import eyeIcon2 from "/eye2.png"; // Import eye2.png icon
import "./LoginPage.css"; // Import CSS file for Login component styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

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
              type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="1234567"
              required
            />
            {/* Add img tag to display eye icon and toggle password visibility */}
            <img
              src={showPassword ? eyeIcon1 : eyeIcon2} // Switch between eyeIcon1 and eyeIcon2 based on showPassword state
              alt="Toggle Password Visibility"
              className="toggle-password-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </label>
        </div>

        <div className="button-container">
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
