import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

export const Movies = () => {
  const { id } = useParams();
  const [currentMovie, setCurrentMovie] = useState({});
 
  const handleBuyTicket = (id) => {
    // navigate to buy.jsx
    window.location.href = `/buy`;
  };


  const getMovieInfo = async (id) => {
      const url = `https://my-json-server.typicode.com/nileshkr17/api-bookmyshowSELF/movies/${id}`;
      console.log(url);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch movie');
      }
      const data = await response.json();
      setCurrentMovie(data);
     
  };

  useEffect(() => {
    console.log('Effect triggered. ID:', id);
    getMovieInfo(id);
  }, [id]);

  useEffect(() => {
    console.log('Current movie:', currentMovie);
  }, [currentMovie]);

  return (
    <>
      {Object.keys(currentMovie).length ? (
      //  map in the object
      <div
      className="flex gap-5 p-6 h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${currentMovie.imageUrl})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className=" rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-black mt-40 pl-6 pb-4 "
        style={{ width: '70%' }}
      >
        <h3 className="text-4xl font-bold text-white">{currentMovie.title}</h3>
        <div className="flex gap-2 mt-3">
          <h3>
            <span className="text-slate-500"></span>
          </h3>
        </div>
        <p className="text-white mt-15 leading-[1.5rem]">
        {currentMovie.details}
        </p>
        {/* button to buy tickets*/}
        <button className="inline-block mr-3 mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        onClick={() => {
          handleBuyTicket(currentMovie.id);
        }}
        >
          Buy Tickets
        </button>
        <a
          href={currentMovie.trailerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Play Trailer
        </a>
      </div>
    </div>
      ) : (
        <Loader/>
      )}
    </>
  );
};

