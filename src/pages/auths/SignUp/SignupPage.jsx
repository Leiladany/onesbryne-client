import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/layout/FormComponent";
import DataService from "../../../components/services/DataService";
import { Stack } from '@mui/joy';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const API_URL = import.meta.env.VITE_API_URL;

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();

    const payload = { name, email, password };

    try {
      const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message);
      }
      const data = await response.json();

      if (data) {
        navigate('/login');
      } else {
        setError(data.message || 'Sign Up failed. Please try again.');
      }
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again later.');
    }
  };

  // Form inputs
  const signupControls = [
    {
      label: 'Primeiro e Último Nome',
      type: 'name',
      value: name,
      onChange: (event) => setName(event.target.value),
      placeholder: 'Tiago Gil',
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      value: email,
      onChange: (event) => setEmail(event.target.value),
      placeholder: 'exemplo@gmail.com',
      required: true,
    },
    {
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      value: password,
      onChange: (event) => setPassword(event.target.value),
      placeholder: '******************',
      required: true,
      icon: true,
      iconSrc: showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />,
      onIconClick: () => setShowPassword(!showPassword),
    },
    {
      label: 'Confirmar Password',
      type: showConfirmPassword ? 'text' : 'password',
      value: confirmPassword,
      onChange: (event) => setConfirmPassword(event.target.value),
      placeholder: '******************',
      required: true,
      icon: true,
      iconSrc: showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />,
      onIconClick: () => setShowConfirmPassword(!showConfirmPassword),
    },
  ];

  return (
    <Stack id="container">
      <Form
        type="signup"
        controls={signupControls}
        handleSubmit={handleSignup}
        buttonText="Criar Conta"
        error={error}
      />
    </Stack>
  );
};

export default SignupPage;
