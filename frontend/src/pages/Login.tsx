import { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(false);
  const login = async (e) => {
    e.preventDefault();
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const json = JSON.stringify({
      email: Email,
      password: Password,
    });
    const data = await axios
      .post("http://localhost:3000/user/login", json, customConfig)
      .then((res) => res.data)
      .catch((error) => {
        setError(error);
      });
    setUser(data);
    localStorage.setItem("authTokens", JSON.stringify(data));
    navigate("/");
  };

  return (
    <div className="flex flex-row m-20">
      <div className="basis-1/2">
        <img
          className="w-50 h-50"
          src="https://static.vecteezy.com/system/resources/previews/002/923/747/original/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-free-vector.jpg"
        />
      </div>

      <div className="basis-1/2 mt-20">
        <h1 className="mr-20 mb-2 ml-20 text-black text-3xl">
          Hello Welcome back!
        </h1>
        <h3 className="mr-20 mb-10 ml-20 text-black text-xl">
          Please enter your details
        </h3>
        <form className="flex flex-col">
          <input
            className="mr-20 mb-10 ml-20 w-1/2 h-14 border-b-2 border-gray-400 focus:border-black-100 focus:outline-none"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            className="mr-20 ml-20 w-1/2 h-14 border-b-2 border-gray-400 focus:border-black-100 focus:outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <a className="mr-20 ml-20 justify-items-end ">Forgot password?</a>
          {Error && (
            <p className="ml-20 text-red-500 ">Password or Email Incorrect</p>
          )}
          <input
            className=" mr-20 ml-20 m-10 w-1/2 h-14 rounded-lg bg-[#0B2445] text-white text-xl"
            type="submit"
            value="Sign In"
            onClick={login}
          />
        </form>
        <div>
          <p className=" flex w-1/2 ml-16 justify-center">Or continue with</p>
          <div className="flex flex-row w-1/2 ml-16 justify-center">
            <img
              className="h-11 w-11 mr-2 ml-2 m-2"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dayzcolony.com%2Fwp-content%2Fuploads%2F2017%2F10%2FFacebook-Circle-Icon-800x800.png&f=1&nofb=1&ipt=ae9920615e7012512ddf170705b505c5e77b8786809d16362488a075524685b7&ipo=images"
            />
            <img
              className="h-11 w-11 mr-2 ml-2 m-2"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dayzcolony.com%2Fwp-content%2Fuploads%2F2017%2F10%2FFacebook-Circle-Icon-800x800.png&f=1&nofb=1&ipt=ae9920615e7012512ddf170705b505c5e77b8786809d16362488a075524685b7&ipo=images"
            />
            <img
              className="h-11 w-11 mr-2 ml-2 m-2"
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.dayzcolony.com%2Fwp-content%2Fuploads%2F2017%2F10%2FFacebook-Circle-Icon-800x800.png&f=1&nofb=1&ipt=ae9920615e7012512ddf170705b505c5e77b8786809d16362488a075524685b7&ipo=images"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
