import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const json = JSON.stringify({
      email: "user@test.com",
      password: "testpassword",
    });
    const data = await axios
      .post("http://localhost:3000/user/login", json, customConfig)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
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
      <input type="submit" onClick={login} />
    </form>
  );
};
export default Login;
