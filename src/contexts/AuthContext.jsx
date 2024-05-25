import { createContext, useState, useEffect } from 'react';
import DataService from '../components/services/DataService';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = async (payload) => {
    try {
      const response = await DataService.createData('/auth/login', payload);
      const data = response.data;

      if (data.session) {
        const tokenDecoded = jwtDecode(data.session.access_token);
        setUserId(data.user.id);
        setToken(tokenDecoded);
        sessionStorage.setItem(
          'authData',
          JSON.stringify({
            isAuthenticated: true,
            userId: data.user.id,
            token: data.session.access_token,
          }),
        );
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const handleLogout = async () => {
    setUserId(null);
    setToken(null);
    sessionStorage.removeItem('authData');
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const storedAuthData = JSON.parse(sessionStorage.getItem('authData'));
    if (storedAuthData) {
      setUserId(storedAuthData.userId);
      setToken(storedAuthData.token);
      setIsAuthenticated(true);
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
