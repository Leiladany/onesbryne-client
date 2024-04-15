import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormComponent from "../../../components/form/FormComponent";
import DataService from "../../../components/DataService";

import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const payload = { name, email, password };

    try {
      const response = await DataService.createData("/auth/signup", payload);
      console.log('response :>> ', response);

      if (response) {
        navigate("/login");
      } else {
        setError(response.message || "Sign Up failed. Please try again.");
      }
    } catch (error) {
      setError(error.message || "An error occurred. Please try again later.");
    }
  };



  // Form inputs
  const signupInputs = [
    {
      label: "Primeiro e último nome",
      type: "text",
      value: name,
      onChange: (event) => setName(event.target.value),
      placeholder: "Tiago Gil",
      required: true,
    },
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
    {
      label: "Confirmar password",
      type: showConfirmPassword ? "text" : "password",
      value: confirmPassword,
      onChange: (event) => setConfirmPassword(event.target.value),
      placeholder: "******************",
      required: true,
      icon: true,
      iconSrc: showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />,
      onIconClick: () => setShowConfirmPassword(!showConfirmPassword),
    },
  ];

  return (
    <div id="page-container">
      <FormComponent
        type="signup"
        inputs={signupInputs}
        handleSubmit={handleSignup}
        buttonText="Criar Conta"
        error={error}
      />
    </div>
  );
};

export default SignupPage;
