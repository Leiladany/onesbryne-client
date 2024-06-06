import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context';
import { Form } from '../components/layout/form';
import { DataService } from '../components/services/data-service';
import { Stack } from '@mui/joy';

export const ProfilePage = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    getUserById();
  }, [userId]);

  // Function to fetch user by id
  const getUserById = async () => {
    try {
      const userData = await DataService.fetchData(`/api/users/${userId}`);
      if (userData) {
        setUser(userData);
        setNewName(userData.user.name);
        setNewEmail(userData.user.email);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Failed to fetch user data.');
    }
  };

  // Function to update user by id
  const updateUserById = async (e) => {
    e.preventDefault();

    if (user) {
      const newData = {
        newName: newName || data.user.name,
        newEmail: newEmail || data.user.email,
      };

      try {
        const updatedUser = await DataService.updateData(
          `/api/users/${userId}`,
          newData,
        );
        if (updatedUser) {
          setData(updatedUser);
          navigate('/clothes');
        } else {
          setError('Failed to update profile. Please try again.');
        }
      } catch (error) {
        console.error('Error updating user:', error);
        setError('Failed to update profile. Please try again.');
      }
    }
  };

  // Form inputs
  const profileControls = [
    {
      label: 'Name',
      type: 'text',
      value: newName,
      onChange: (e) => setNewName(e.target.value),
      placeholder: 'Tiago Gil',
      required: false,
    },
    {
      label: 'Email',
      type: 'email',
      value: newEmail,
      onChange: (e) => setNewEmail(e.target.value),
      placeholder: 'exemplo@gmail.com',
      required: false,
    },
  ];

  return (
    <Stack id="container">
      <Form
        controls={profileControls}
        handleSubmit={updateUserById}
        buttonText="Actualizar Conta"
      />
      {error && <p>{error}</p>}
    </Stack>
  );
};
