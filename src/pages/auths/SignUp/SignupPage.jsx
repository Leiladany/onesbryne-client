import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import eyeIcon1 from "/eye1.png";
import eyeIcon2 from "/eye2.png";
import FormComponent from "../../../components/form/FormComponent";

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

    const payload = { name, email, password };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.status === 201) {
        await response.json();
        navigate("/login");
      } else {
        setError("Sign Up failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
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
      placeholder: "tiagogil@gmail.com",
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
      iconSrc: showPassword ? eyeIcon1 : eyeIcon2,
      onIconClick: () => setShowPassword(!showPassword)
    },
    {
      label: "Confirmar password",
      type: showConfirmPassword ? "text" : "password",
      value: confirmPassword,
      onChange: (event) => setConfirmPassword(event.target.value),
      placeholder: "******************",
      required: true,
      icon: true,
      iconSrc: showConfirmPassword ? eyeIcon1 : eyeIcon2,
      onIconClick: () => setShowConfirmPassword(!showConfirmPassword)
    },
  ];

  return (
    <div>
      <FormComponent
        type="signup"
        inputs={signupInputs}
        handleSubmit={handleSignup}
        buttonText="Criar Conta"
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignupPage;
