import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext("");

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const contextData = {
    user: user,
  };
  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {};
  const signUpUser = async (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
