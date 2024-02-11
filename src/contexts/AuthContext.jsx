import React, { createContext, useState } from "react";
import axios from "axios";

const tokenKey = "authToken";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    return axios
      .post("/auth/login", { email, password })
      .then((response) => {
        if (response.status === 200) {
          const authToken = response.data.token;
          localStorage.setItem(tokenKey, authToken);
          setUser({ isAuthenticated: true, authToken });
          return { success: true, authToken };
        } else {
          return response.json();
        }
      })
      .then((parsed) => {
        if (parsed.message === "User not found") {
          setError("User not found. Please check your username.");
        } else if (parsed.message === "Invalid password") {
          setError("Invalid password. Please check your password.");
        } else {
          throw new Error(parsed.message);
        }

        return { success: false, message: parsed.message };
      })
      .catch((error) => {
        console.error("Error during login:", error.message);
        return { success: false, message: "Internal Server Error" };
      });
  };

  const signup = async (name, email, password) => {
    return axios
      .post("/auth/signup", { name, email, password })
      .then((response) => {
        if (response.status === 201) {
          return { success: true };
        } else {
          return response.json();
        }
      })
      .then((parsed) => {
        if (parsed.message) {
          throw new Error(parsed.message);
        }

        return { success: true };
      })
      .catch((error) => {
        console.error("Error during signup:", error.message);
        return { success: false, message: "Internal Server Error" };
      });
  };

  const logout = async () => {
    localStorage.removeItem(tokenKey);
    setUser(null);
  };

  const verifyToken = async () => {
    const authToken = localStorage.getItem(tokenKey);

    if (authToken) {
      return axios
        .post("/auth/verify", null, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        })
        .then((response) => {
          if (response.status === 200) {
            return { isAuthenticated: true, authToken };
          } else {
            localStorage.removeItem(tokenKey);
            return { isAuthenticated: false };
          }
        })
        .catch((error) => {
          console.error("Error verifying token:", error.message);
          localStorage.removeItem(tokenKey);
          return { isAuthenticated: false };
        });
    } else {
      return Promise.resolve({ isAuthenticated: false });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, verifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
