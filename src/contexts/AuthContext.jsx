import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleLogin = async (currentToken, currentUserId) => {
    if (!currentToken || !currentUserId) {
      console.error("Token or User ID is missing");
      return;
    }

    try {
      window.localStorage.setItem("authToken", currentToken);
      setUserId(currentUserId);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("authToken");
    setUserId(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    const tokenFromStorage = window.localStorage.getItem("authToken");

    if (tokenFromStorage) {
      setIsAuthenticated(true);
    }
  }, []);

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
