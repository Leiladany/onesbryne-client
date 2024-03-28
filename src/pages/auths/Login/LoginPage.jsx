import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import eyeIcon1 from "/eye1.png";
import eyeIcon2 from "/eye2.png";
import FormComponent from "../../../components/form/FormComponent";

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
        const { token } = parsed;
        handleLogin(token);
      }
    } catch (error) {
      console.log(error);
      setError("Failed to login. Please try again.");
    }
  };

  // Form inputs
  const loginInputs = [
    {
      label: "Email",
      type: "email",
      value: email,
      onChange: (event) => setEmail(event.target.value),
      placeholder: "blabla@bla.bla",
      required: true,
    },
    {
      label: "Password",
      type: showPassword ? "text" : "password",
      value: password,
      onChange: (event) => setPassword(event.target.value),
      placeholder: "1234567",
      required: true,
      icon: true,
      iconSrc: showPassword ? eyeIcon1 : eyeIcon2,
      onIconClick: () => setShowPassword(!showPassword)
    },
  ];

  return (
    <div>
      <FormComponent
      type="login"
        inputs={loginInputs}
        handleSubmit={handleSubmit}
        buttonText="Entrar"
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginPage;
