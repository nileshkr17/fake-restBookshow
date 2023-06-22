import React from "react";
import "../index.css";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="bg-black w-full h-screen py-25 text-white">
  <div className="max-w-[1240px] mx-auto">
    {/* Movie banner for recent movies */}
    <div className="grid grid-cols-1 gap-4">
      {/* Latest movies slider */}
      <div className="flex items-center justify-center">
       <Slider/>
      </div>
      
    </div>
  </div>
</div>

  );
};

export default Banner;
