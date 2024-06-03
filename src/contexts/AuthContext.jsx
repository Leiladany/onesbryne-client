import { createContext, useState, useEffect } from 'react';
import { DataService } from '../components/services/DataService';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  const handleLogin = async (payload) => {
    try {
      const responseUserAuth = await DataService.createData(
        '/auth/login',
        payload,
      );
      if (responseUserAuth) {
        const token = responseUserAuth.data.session.access_token;
        window.localStorage.setItem('authToken', token);
        const decodedToken = jwtDecode(
          responseUserAuth.data.session.access_token,
        );
        userData(token, decodedToken);
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  const fetchUserData = async (userId) => {
    try {
      const responseUserPublic = await DataService.fetchData(
        `/api/users/${userId}`,
      );
      if (responseUserPublic) {
        const userRole = responseUserPublic.user.role;
        if (userRole === 'admin') setIsAdmin(true);
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  const userData = (token, decodedToken) => {
    if (token) setToken(token);
    if (decodedToken.aud === 'authenticated') setIsAuthenticated(true);
    if (decodedToken.sub) {
      setUserId(decodedToken.sub);
      fetchUserData(decodedToken.sub);
    }
  };

  const handleLogout = async () => {
    setUserId(null);
    setToken(null);
    window.localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setIsAdmin(false);
  };

  useEffect(() => {
    const storedToken = window.localStorage.getItem('authToken');
    if (storedToken) {
      const decodedStoreToken = jwtDecode(storedToken);
      userData(storedToken, decodedStoreToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
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
