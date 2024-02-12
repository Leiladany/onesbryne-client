import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default AuthProvider;
