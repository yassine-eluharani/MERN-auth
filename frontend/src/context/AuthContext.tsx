import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext("");

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios
        .post("http://localhost:8OO0/", {
          email,
          password,
        })
        .then((res) => {
          if (res.data === "Email exist") {
            console.log("User exist");
          } else {
            alert("User does not exist");
          }
        });
    } catch (e) {
      console.error(e);
    }
  };
  const signUpUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await axios.post("http://localhost:8OO0/signup", {
        email,
        password,
      });
    } catch (e) {
      console.error(e);
    }
  };
  const contextData = {
    user: user,
    loginUser: loginUser,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
