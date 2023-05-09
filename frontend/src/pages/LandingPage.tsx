import React, { useState } from "react";
import Venues from "../components/Venues";
import ESearch from "../components/ESearch";

const LandingPage = () => {
  const [Toggle, setToggle] = useState(true);
  return (
    <div className="flex flex-col items-center mt-20  justify-center mx-auto max-w-7xl px-4 py-8 space-y-8">
      <p className="text-4xl">The region of industry where knowledge evolves</p>
      <div>
        <p className="text-xl">
          Edugion provides on all-encompassing databse of industry information
          that uses a recongnized classification system, promoting technical
          education adn fastering cross-industry growth.
        </p>
        <button
          onClick={() => {
            setToggle(true);
          }}
          className={
            !Toggle
              ? "mt-20 text-3xl ml-10 mr-10"
              : "mt-20 text-3xl ml-10 mr-10 rounded-md p-3 border-4 border-blue-500 border-b-white "
          }
        >
          ESearch
        </button>
        <button
          onClick={() => {
            setToggle(false);
          }}
          className={
            Toggle
              ? "mt-20 text-3xl ml-10 mr-10"
              : "mt-20 text-3xl ml-10 mr-10 rounded-md p-3 border-4 border-blue-500 border-b-white "
          }
        >
          Venue
        </button>
        <div className=" bg-blue-500 h-px"></div>
      </div>
      {Toggle ? <ESearch /> : <Venues />}
    </div>
  );
};

export default LandingPage;
