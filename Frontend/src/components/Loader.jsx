import React from "react";
import './Loader.css'
const Loader = () => {
  return (
    <div className="loader-container h-screen bg-black">
      <div className="loader"></div>
      {/* a loader msg */}
        <h2 className="text-white text-2xl font-bold">Loading...</h2>
    </div>
  );
};

export default Loader;
