import React from "react";
import "../index.css";

const Banner = () => {
  return (
    <div className="bg-black w-full h-screen py-25 text-white ">
      <div className="max-w-[1240px] mx-auto ">
        <h1 className="text-6xl text-center  text-white">Hello World</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Button
        </button>
      </div>
    </div>
  );
};

export default Banner;
