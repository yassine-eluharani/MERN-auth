import React from "react";

const ESearch = () => {
  return (
    <div className="flex flex-row w-full  h-full">
      <div className="flex flex-col max-w-sm bg-[#F4F4F4] rounded-xl p-5">
        <p className="text-5xl mb-10">ESearch</p>
        <p className="text-xl">
          Finally in an extraordinary simple way, find industry information at
          your fingertips.
          <br />
          <br />
          Association, Award, Competition, Prize, Etc.., Building, Mural, Park,
          Show, Village, Etc.., Call for Papers, Event, Higher Education,
          Libary, Media, Meseum, NewsRSS, Piggyback Event, Sponsorship, Tour and
          Venue
        </p>
      </div>
      <div className="flex flex-col items-center justify-center ml-5 h-full flex-grow">
        <p className="text-5xl mb-10">Start your ESearch</p>
        <div className="grid grid-cols-3 justify-evenly h-full">
          <select className="rounded-xl py-3 m-3 mb-10 bg-white border border-black p-3 col-span-2">
            <option value="" disabled selected>
              Industry(s)
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10 bg-white border border-black p-3">
            <option value="" disabled selected>
              Resource(s)
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10  bg-white border border-black p-3">
            <option value="" disabled selected>
              Country/Territory
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10  bg-white border border-black p-3">
            <option value="" disabled selected>
              Region
            </option>
          </select>
          <select className="rounded-xl py-3 m-3 mb-10  bg-white border border-black p-3">
            <option value="" disabled selected>
              Sub Region
            </option>
          </select>
        </div>
        <button className="bg-[#0b2445] text-xl text-white rounded-full p-5">
          Search Results
        </button>
      </div>
    </div>
  );
};

export default ESearch;
