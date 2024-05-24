import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Form from "../../../components/layout/FormComponent";
import DataService from "../../../components/services/DataService";
import { Stack } from '@mui/joy';

import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('talmeidagil@hotmail.com');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      handleLogin(payload);
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  // Form inputs
  const loginControls = [
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
  ];

  return (
    <Stack id="container">
      <Form
        type="login"
        controls={loginControls}
        handleSubmit={handleSubmit}
        buttonText="Entrar"
        error={error}
      />
    </Stack>
  );
};

export default LoginPage;
