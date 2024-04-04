import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import FormComponent from "../../../components/form/FormComponent";
import DataService from "../../../components/DataService";

import { IoEyeOutline, IoEyeOffOutline  } from "react-icons/io5";

const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const response = await DataService.createData("/auth/login", payload);

      if (response) {
        if (response.token) {
          handleLogin(response.token);
        } else if (response.message) {
          if (response.message === "User not found") {
            setError("User not found. Please check your username.");
          } else if (response.message === "Invalid password") {
            setError("Invalid password. Please check your password.");
          } else {
            setError(response.message);
          }
        }
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Login failed. Please try again.");
    }
  };

  // Form inputs
  const loginInputs = [
    {
      label: "Email",
      type: "email",
      value: email,
      onChange: (event) => setEmail(event.target.value),
      placeholder: "exemplo@gmail.com",
      required: true,
    },
    {
      label: "Password",
      type: showPassword ? "text" : "password",
      value: password,
      onChange: (event) => setPassword(event.target.value),
      placeholder: "******************",
      required: true,
      icon: true,
      iconSrc: showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />,
      onIconClick: () => setShowPassword(!showPassword),
    },
  ];

  return (
    <div id="page-container">
      <FormComponent
        type="login"
        inputs={loginInputs}
        handleSubmit={handleSubmit}
        buttonText="Entrar"
        error={error}
      />
    </div>
  );
};

export default LoginPage;
