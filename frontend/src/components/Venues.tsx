import React from "react";

const Venues = () => {
  return (
    <div className="flex flex-row w-full  h-full">
      <div className="flex flex-col max-w-sm bg-[#F4F4F4] rounded-xl p-5">
        <p className="text-5xl mb-10">Venues</p>
        <p className="text-xl">
          Venues are any type used for industry related events. The filters
          allow you to refine your search in ways always desired
        </p>
      </div>
      <div className="flex flex-col items-center justify-center ml-5 h-full flex-grow">
        <p className="text-5xl mb-10">Start your venue</p>
        <div className="grid grid-cols-3 justify-evenly h-full">
          <select className="rounded-xl py-3 m-3 mb-10 bg-white border border-black p-3">
            <option value="" disabled selected>
              Country/Territory
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10 bg-white border border-black p-3">
            <option value="" disabled selected>
              Region
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10  bg-white border border-black p-3">
            <option value="" disabled selected>
              Sub Region
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10  bg-white border border-black p-3">
            <option value="" disabled selected>
              Venue Types
            </option>
          </select>
          <input
            className="rounded-xl py-3 m-3 mb-10 border border-black p-3"
            value="Distance from airport"
          />
          <input
            className="rounded-xl py-3 m-3 mb-10 border border-black p-3"
            value="Total square feet"
          />
          <div className="rounded-xl bg-white py-3 m-3 mb-10 border border-black p-3">
            <p>Minimum number if attendees</p>
            <p>Maximum number if attendees</p>
          </div>
          <div className="rounded-xl bg-white py-3 m-3 mb-10 border border-black p-3">
            <p>Minimum number guest rooms</p>
            <p>Maximum number guest rooms</p>
          </div>
        </div>
        <button className="bg-[#0b2445] text-xl text-white rounded-full p-5">
          Search Results
        </button>
      </div>
    </div>
  );
};

export default Venues;
