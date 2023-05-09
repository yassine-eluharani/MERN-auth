import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext("");

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? localStorage.getItem("authTokens")
      : null
  );
  const contextData = {
    user: user,
    setUser: setUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
