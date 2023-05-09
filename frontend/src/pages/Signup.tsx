import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
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
    navigate("/login");
  };
  return (
    <div className="flex flex-row m-20">
      <div className="basis-1/2">
        <img
          className="w-50 h-50"
          src="https://static.vecteezy.com/system/resources/previews/002/923/747/original/global-network-connection-world-map-point-and-line-composition-concept-of-global-business-illustration-free-vector.jpg"
        />
      </div>

      <div className="basis-1/2 ">
        <h1 className="mr-20  -2 ml-20 text-black text-3xl">
          Create Account!{" "}
        </h1>
        <h3 className="mr-20  -10 ml-20 text-black text-xl">
          Let's get started
        </h3>
        <form className="flex flex-col">
          <p className="mr-20 ml-20">Account Type</p>
          <select className="w-1/2 mr-20 ml-20 rounded-xl py-3 m-3  -10 bg-white border border-black p-3">
            <option value="" disabled selected>
              General User
            </option>
          </select>
          <input
            className="mr-20  ml-20 w-1/2 h-14 border-b-2 placeholder-black border-gray-400 focus:border-black-100 focus:outline-none"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            className="mr-20 ml-20 w-1/2 h-14 border-b-2 placeholder-black border-gray-400 focus:border-black-100 focus:outline-none"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input
            type="password"
            className="mr-20 ml-20 w-1/2 h-14 border-b-2 placeholder-black border-gray-400 focus:border-black-100 focus:outline-none"
            placeholder="Confirm Password"
          />
          <select className="w-1/2 mr-20 ml-20 py-3 m-3  bg-white border-b-2 border-gray-400 p-3">
            <option value="" disabled selected>
              Country
            </option>
          </select>
          <select className="w-1/2 mr-20 ml-20 py-3 m-3  bg-white border-b-2 border-gray-400 p-3">
            <option value="" disabled selected>
              Year of birth
            </option>
          </select>
          <select className="w-1/2 mr-20 ml-20 py-3 m-3  bg-white border-b-2 border-gray-400 p-3">
            <option value="" disabled selected>
              Gender
            </option>
          </select>

          <input
            className=" mr-20 ml-20 m-10 w-1/2 h-14 rounded-lg bg-[#0B2445] text-white text-xl"
            type="submit"
            value="Sign In"
            onClick={register}
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

export default Signup;
