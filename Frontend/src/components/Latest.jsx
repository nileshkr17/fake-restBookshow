import React from 'react';

const Latest = () => {
  const movieData = [
    
    {
        id: 1,
        imageUrl: 'https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg',
        title: 'Movie 1',
        rating: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 1,
        imageUrl: 'https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg',
        title: 'Movie 1',
        rating: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 1,
        imageUrl: 'https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg',
        title: 'Movie 1',
        rating: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        id: 1,
        imageUrl: 'https://www.heavenofhorror.com/wp-content/uploads/2020/04/time-to-hunt-netflix-review.jpg',
        title: 'Movie 1',
        rating: 4.5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
   
  ];

  const handleMovieClick = (id) => {
    // Perform navigation logic with the provided movie id
    console.log('Navigating to movie with id:', id);
  };

  return (
    <div className="bg-black w-full min-h-screen pt-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-10 text-white">Latest Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {movieData.map((movie) => (
            <div
              key={movie.id}
              className="relative group overflow-hidden rounded-md cursor-pointer"
              onClick={() => handleMovieClick(movie.id)}
            >
              <img
                src={movie.imageUrl}
                alt="Latest movie"
                className="object-fit w-full h-60 sm:h-80 md:h-30 lg:h-30 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-white text-lg font-bold">{movie.title}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">&#9733;</span>
                  <span className="text-white">{movie.rating}</span>
                </div>
                <p className="text-white mt-2 px-4 text-center">{movie.description}</p>
                <button
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
                  onClick={() => handleMovieClick(movie.id)}
                >
                  Go to Movie
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
