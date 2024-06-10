import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Form } from '../components/layout/form';
import { Stack } from '@mui/joy';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

export const LoginPage = () => {
  const { handleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await handleLogin(payload);
  };

  // Form inputs
  const loginControls = [
    {
      label: 'Email',
      type: 'email',
      value: email,
      setValue: setEmail,
      placeholder: 'exemplo@gmail.com',
      required: true,
    },
    {
      label: 'Password',
      type: showPassword ? 'text' : 'password',
      value: password,
      setValue: setPassword,
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
      />
    </Stack>
  );
};
