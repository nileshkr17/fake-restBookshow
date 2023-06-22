import React from "react";
import "../index.css";
import Slider from "./Slider";

const Banner = () => {
  return (
    <div className="bg-black w-full h-screen py-25 text-white">
      <div className="max-w-[1240px] mx-auto ">
        {/* Movie banner for recent movies */}
        <div className="grid grid-cols-1 gap-4 ">
          {/* Latest movies slider */}
          <div className="flex items-center justify-center">
            <Slider />
          </div>
        </div>
      </div>

      {/* Movie banner for upcoming movies */}
      <div className="max-w-[1240px] mx-auto mt-10  p-4  ">
        {/* Screeing patners name */}
        <div className="grid grid-cols-4 gap-4 ">
          <div className="flex items-center justify-center">
            <h2 className="text-2xl font-bold text-white">
              Screening Partners
            </h2>
            </div>
            <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/aklvscgup/inox.jpg?updatedAt=1687426631959"
              alt="Upcoming movies"
              className="object-fill w-20 h-10 "
            />
            </div>
            <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/aklvscgup/pvr.jpg?updatedAt=1687427233597"
              alt="Upcoming movies"
              className="object-cover w-20 h-10 rounded-md "
            />
            </div>
            <div className="flex items-center justify-center">
            <img
              src="https://ik.imagekit.io/aklvscgup/cine.webp?updatedAt=1687427349621"
              alt="Upcoming movies"
              className="object-cover w-20 h-10 rounded-md "
            />
            </div>
            </div>
       </div>
    </div>
  );
};

export default Banner;
