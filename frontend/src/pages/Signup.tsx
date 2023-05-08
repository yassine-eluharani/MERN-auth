import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) => {
    e.preventDefault();
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const json = JSON.stringify({ email: email, password: password });
    const data = await axios
      .post("http://localhost:3000/user/signup", json, customConfig)
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };
  return (
    <div>
      <div>
        <div>
          <form>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <input type="submit" onClick={register} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
