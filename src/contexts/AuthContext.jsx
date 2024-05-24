import { createContext, useState } from 'react';
import DataService from '../components/services/DataService';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = async (payload) => {
    try {
      const response = await DataService.createData('/auth/login', payload);
      const data = response.data;

      if (data.session) {
        setIsAuthenticated(true);
        console.log(data);
        setUserId(data.user.id);
        console.log(data.user.id);
        console.log(userId);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userId,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
