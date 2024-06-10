import { useContext, useState } from 'react';
import { Form } from '../components/layout/form';
import { Stack } from '@mui/joy';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import { AuthContext } from '../contexts/auth.context';
import { signupToast } from '../components/utils/toasts';

export const SignupPage = () => {
  const { handleSignup } = useContext(AuthContext);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    const payload = { name, email, password };

    try {
      if (password.length < 6) {
        signupToast.errorPasswordSize();
      } else if (password !== confirmPassword) {
        signupToast.errorPasswordMatch();
      } else {
        await handleSignup(payload);
      }
    } catch (error) {
      throw error
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const signupControls = [
    {
      label: 'Primeiro e Último Nome',
      type: 'name',
      value: name,
      setValue: setName,
      placeholder: 'Tiago Gil',
      required: true,
    },
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
    {
      label: 'Confirmar Password',
      type: showConfirmPassword ? 'text' : 'password',
      value: confirmPassword,
      setValue: setConfirmPassword,
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
        handleSubmit={handleSubmit}
        buttonText="Criar Conta"
        isLoading={isSubmitLoading}
      />
    </Stack>
  );
};
