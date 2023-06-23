import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    await fetch("https://my-json-server.typicode.com/nileshkr17/api-bookmyshowSELF/movies")
      .then(res => res.json())
      .then(data => {
        setMovies(data);
        setFilteredMovies(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);



  const handleSearch = (e) => {
    const search = e.target.value;
    if (search.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMovies(filtered);
    }
  };

  if (isLoading) {
    return <Loader />; // Replace with your loader component or content
  }

  return (
    <div className="bg-black w-full min-h-screen pt-10 text-white pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-10 text-white">Search Movies</h2>
        <div className="flex justify-center items-center mb-10">
          <input
            type="text"
            placeholder="Search for a movie"
            className="px-4 py-2 text-black rounded-md w-96"
            onChange={handleSearch}
          />
        </div>

        {filteredMovies.length === 0 ? (
          <>
           <p className="text-white text-center">No movies found in the database.</p>
           <p className="text-white text-center">
              Contribute to our API: 
              <a
                href="https://my-json-server.typicode.com/nileshkr17/api-bookmyshowSELF"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className='inline m-2 text-2'/> 
              </a>
            </p>
          </>
         
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="relative group overflow-hidden border-r border-b border-red-700 rounded-md cursor-pointer"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={movie.imageUrl}
                    alt="Latest movie"
                    className="object-contain h-60 sm:h-80 md:h-30 lg:h-30 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <p className="text-white text-lg font-bold">{movie.title}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">&#9733;</span>
                    <span className="text-white">{movie.rating}</span>
                  </div>
                  <p className="text-white mt-2 px-4 text-center">{movie.details}</p>
                  <Link to={`/movies/${movie.id}`}>
                  <button
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                  >
                    Go to Movie
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
