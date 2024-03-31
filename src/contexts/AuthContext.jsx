import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userRole, setUserRole] = useState("");

  const handleLogin = (token) => {
    try {
      window.localStorage.setItem("authToken", token);
      const decoded = jwtDecode(token);
      setUserId(decoded.userId);
      setUserRole(decoded.userRole);
      setIsAuthenticated(true);
      navigate("/clothes");
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleLogout = async () => {
    window.localStorage.removeItem("authToken");
    setUserId(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const tokenFromStorage = window.localStorage.getItem("authToken");
    if (tokenFromStorage) {
      try {
        const decoded = jwtDecode(tokenFromStorage);
        setUserId(decoded.userId);
        setUserRole(decoded.userRole);
        console.log("Logged in User ID:", decoded);
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userId,
        userRole,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
