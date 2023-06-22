import React, { useState, useEffect } from "react";
import "../index.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const movies = [
    {
      id: 1,
      title: "The Flash",
      imageUrl: "https://images.thedirect.com/media/article_full/the-flash-movie-poster-2023-batman-ben-affleck-batfleck-dc-dcu.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      trailerUrl: "https://youtu.be/9vwaD9cHLNw"
    },
    {
      id: 2,
      title: "Bloody Daddy",
      imageUrl: "https://india.postsen.com/content/uploads/2023/06/09/41ec73e785.jpg",
      details: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      trailerUrl: "https://youtu.be/O1vDPCGygkQ"
    },
    {
      id: 3,
      title: "Evil Deed Rise",
      imageUrl: "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1683272163.jpg",
      details: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      trailerUrl: "https://youtu.be/BqQNO7BzN08"
    },
    {
      id: 4,
      title: "Midnight",
      imageUrl: "https://www.hancinema.net/photos/photo1348009.jpg",
      details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      trailerUrl: "https://youtu.be/3Ap4ww9Ap-0"
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      goToNextSlide();
    }, 5000); 

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === movies.length - 1 ? 0 : prevSlide + 1
    );
  };

//   const goToPreviousSlide = () => {
//     setCurrentSlide((prevSlide) =>
//       prevSlide === 0 ? movies.length - 1 : prevSlide - 1
//     );
//   };

  return (
    <div className="relative w-full h-80 lg:h-96">
      <div className="absolute inset-0 bg-black bg-opacity-50 blur"></div>
      <div className="max-w-[1240px] mx-auto h-full">
       
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={movies[currentSlide].imageUrl}
            alt={movies[currentSlide].title}
            className="object-cover max-h-full max-w-full transition-opacity duration-500"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <h2 className="text-lg font-bold text-white">{movies[currentSlide].title}</h2>
              <p className="text-sm text-white">{movies[currentSlide].details}</p>
              <a
                href={movies[currentSlide].trailerUrl}
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
