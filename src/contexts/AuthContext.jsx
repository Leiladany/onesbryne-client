import { createContext, useState, useEffect } from 'react';
import DataService from '../components/services/DataService';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const userData = (token, decodedToken) => {
    if (token) setToken(token);
    if (decodedToken.role === 'authenticated') setIsAuthenticated(true);
    if (decodedToken.sub) setUserId(decodedToken.sub);
  };

  const handleLogin = async (payload) => {
    try {
      const response = await DataService.createData('/auth/login', payload);
      if (response) {
        const token = response.data.session.access_token;
        window.localStorage.setItem('authToken', token);
        const decodedToken = jwtDecode(response.data.session.access_token);
        userData(token, decodedToken);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleLogout = async () => {
    setUserId(null);
    setToken(null);
    window.localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedToken = window.localStorage.getItem('authToken');
    if (storedToken) {
      const decodedStoreToken = jwtDecode(storedToken)
      userData(storedToken, decodedStoreToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userId,
        token,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
