import React, { useState, useEffect } from "react";
import "../index.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [arr, setArr] = useState([]);

  const getData = async () => {
    await fetch("https://my-json-server.typicode.com/nileshkr17/api-bookmyshowSELF/movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArr(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === arr.length - 1 ? 0 : prevSlide + 1));
  };

  // Check if arr is empty
  if (arr.length === 0) {
    return <div>Loading...</div>; // Replace with your loading state or fallback content
  }

  return (
    <div className="relative w-full h-80 lg:h-96 z-10">
      <div className="absolute inset-0 bg-black bg-opacity-50 blur"></div>
      <div className="max-w-[1240px] mx-auto h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={arr[currentSlide].imageUrl}
            alt={arr[currentSlide].title}
            className="object-cover max-h-full max-w-full transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black">
              <h2 className="text-lg font-bold text-white">{arr[currentSlide].title}</h2>
            <div className="sm:mx-10 md:mx-40 lg:mx-40"><p className="text-sm text-white mt-2 px-4 text-center ">{arr[currentSlide].details}</p></div>  
              <a
                href={arr[currentSlide].trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Play Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

