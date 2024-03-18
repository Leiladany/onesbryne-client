import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogin = async (currentToken) => {
    if (!currentToken) {
      console.error("Token is missing");
      return;
    }

    try {
      setToken(currentToken);
      setIsAuthenticated(true);
      window.localStorage.setItem("authToken", currentToken);
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const handleLogout = () => {
    setToken(null);
    setIsAuthenticated(false);
    window.localStorage.removeItem("authToken");
  };

  useEffect(() => {
    const tokenFromStorage = window.localStorage.getItem("authToken");
    if (tokenFromStorage) {
      setToken(tokenFromStorage);
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        isLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
