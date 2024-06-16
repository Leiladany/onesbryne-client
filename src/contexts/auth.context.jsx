import { createContext, useState, useEffect } from 'react';
import { DataService } from '../components/services/data-service';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import {
  signupToast,
  loginToast,
  logoutToast,
} from '../components/utils/toasts';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = window.localStorage.getItem('authToken');
    if (storedToken) {
      const decodedStoreToken = jwtDecode(storedToken);
      userData(storedToken, decodedStoreToken);
    }
  }, []);

  const handleSignup = async (payload) => {
    try {
      const response = await DataService.createData('/auth/signup', payload);
      console.log(response);
      if (response.data) {
        const token = response.data.session.access_token;
        window.localStorage.setItem('authToken', token);
        const decodedToken = jwtDecode(token);
        userData(token, decodedToken);
        navigate('/');
        signupToast.success();
      }
    } catch (error) {
      signupToast.error();
      throw error;
    }
  };

  const handleLogin = async (payload) => {
    try {
      const response = await DataService.createData('/auth/login', payload);
      if (response.error) {
        loginToast.error();
      } else if (response.data) {
        const token = response.data.session.access_token;
        window.localStorage.setItem('authToken', token);
        const decodedToken = jwtDecode(token);
        userData(token, decodedToken);
        navigate('/');
        loginToast.success();
      }
    } catch (error) {
      loginToast.error();
      throw error;
    }
  };

  const handleLogout = async () => {
    setUserId(null);
    setToken(null);
    setIsAuthenticated(false);
    setIsAdmin(false);
    window.localStorage.removeItem('authToken');
    logoutToast.success();
  };

  const fetchUserData = async (userId) => {
    try {
      const responseUserPublic = await DataService.fetchData(
        `/api/users/${userId}`,
      );
      if (responseUserPublic) {
        const userRole = responseUserPublic.user.role;
        if (userRole === 'admin') {
          setIsAdmin(true);
        }
      }
    } catch (error) {
      console.error('Error fetching user data:', error.message);
    }
  };

  const userData = (token, decodedToken) => {
    if (token) {
      setToken(token);
    }
    if (decodedToken.aud === 'authenticated') {
      setIsAuthenticated(true);
    }
    if (decodedToken.sub) {
      setUserId(decodedToken.sub);
      fetchUserData(decodedToken.sub);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isAdmin,
        userId,
        token,
        handleSignup,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
