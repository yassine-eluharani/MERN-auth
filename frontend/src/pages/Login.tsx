import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8OO0/", {
          Email,
          Password,
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
  return (
    <form>
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Email"
      />
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />
      <input type="submit" onClick={loginUser} />
    </form>
  );
};
export default Login;
