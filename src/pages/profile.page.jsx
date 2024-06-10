import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/auth.context';
import { Form } from '../components/layout/form';
import { DataService } from '../components/services/data-service';
import { Stack, Typography, CircularProgress } from '@mui/joy';
import { errorToast, profileToast } from '../components/utils/toasts';

export const ProfilePage = () => {
  const { userId } = useContext(AuthContext);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  useEffect(() => {
    getUserById();
  }, [userId]);

  const getUserById = async () => {
    try {
      const userData = await DataService.fetchData(`/api/users/${userId}`);
      if (userData) {
        setUser(userData);
        setNewName(userData.user.name);
        setNewEmail(userData.user.email);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserById = async (e) => {
    e.preventDefault();
    setIsSubmitLoading(true);

    if (user) {
      const newData = {
        newName: newName || user.name,
        newEmail: newEmail || user.email,
      };

      try {
        const updatedUser = await DataService.updateData(
          `/api/users/${userId}`,
          newData,
        );
        if (updatedUser) {
          setUser(updatedUser);
          profileToast.successUpdate();
        } else {
          errorToast();
        }
      } catch (error) {
        throw error;
      } finally {
        setIsSubmitLoading(false);
      }
    }
  };

  const profileControls = [
    {
      label: 'Name',
      type: 'text',
      value: newName,
      setValue: setNewName,
      placeholder: 'Tiago Gil',
      required: false,
    },
    {
      label: 'Email',
      type: 'email',
      value: newEmail,
      setValue: setNewEmail,
      placeholder: 'exemplo@gmail.com',
      required: false,
    },
  ];

  return (
    <Stack id="container" sx={{ gap: 4, mx: { xs: 2, md: 10 } }}>
      <Typography level="h4">Perfil</Typography>
      {isLoading ? (
        <CircularProgress variant="plain" color="neutral" />
      ) : (
        <Form
          controls={profileControls}
          handleSubmit={updateUserById}
          buttonText="Editar Conta"
          isLoading={isSubmitLoading}
        />
      )}
    </Stack>
  );
};
