import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  const { user, setUser } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("authTokens");
    setUser(null);
  };
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white shadow-lg p-6">
      <div className="w-full">
        <div className="flex justify-end">
          {!user ? (
            <>
              <Link
                to="/signup"
                className="inline-block rounded-3xl text-xl px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0 mr-4"
              >
                Sign In
              </Link>{" "}
              :
              <Link
                to="/signup"
                className="inline-block text-xl rounded-3xl bg-[#0B2445] px-4 py-2 leading-none border rounded text-white border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={logout}
              className="inline-block rounded-3xl text-xl px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-black hover:bg-red-500 mt-4 lg:mt-0 mr-4"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
