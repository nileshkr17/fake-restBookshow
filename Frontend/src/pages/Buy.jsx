import React, { useState } from 'react';
import clsx from 'clsx';
import '../pages/Buy.css';

const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Buy() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      setSelectedSeats(selectedSeats.filter(selectedSeat => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }

  // Function to handle the next page navigation
  function handleNextPage() {
    // Perform necessary actions to proceed to the next page
    console.log('Proceeding to the next page...');
  }

  return (
    <div className="parent grid justify-center mx-auto my-10">
      <div className="child1 p-4 border border-black">
        <div className="Movies mb-6">
          <label htmlFor="movie" className="mb-2">
            Pick a movie
          </label>
          <select
            id="movie"
            value={selectedMovie.name}
            onChange={e => {
              const selectedMovie = movies.find(movie => movie.name === e.target.value);
              setSelectedSeats([]);
              setSelectedMovie(selectedMovie);
            }}
            className="p-2 border rounded"
          >
            {movies.map(movie => (
              <option key={movie.name} value={movie.name}>
                {movie.name} (₹{movie.price})
              </option>
            ))}
          </select>
        </div>
        <ul className="ShowCase flex justify-center bg-gray-800 py-3 rounded text-gray-500">
          <li className="mx-2">
            <span className="seat" /> <small>N/A</small>
          </li>
          <li className="mx-2">
            <span className="seat selected" /> <small>Selected</small>
          </li>
          <li className="mx-2">
            <span className="seat occupied" /> <small>Occupied</small>
          </li>
        </ul>
        <div className="Cinema mb-6">
          <div className="screen bg-white h-12 w-full transform rotate-x-12 scale-110 rounded-lg shadow-md mb-4" />
          <div className="seats grid grid-cols-8 gap-2">
            {seats.map(seat => {
              const isSelected = selectedSeats.includes(seat);
              const isOccupied = selectedMovie.occupied.includes(seat);
              return (
                <span
                  tabIndex="0"
                  key={seat}
                  className={clsx('seat', isSelected && 'selected', isOccupied && 'occupied')}
                  onClick={isOccupied ? null : () => handleSelectedState(seat)}
                  onKeyPress={
                    isOccupied
                      ? null
                      : e => {
                          if (e.key === 'Enter') {
                            handleSelectedState(seat);
                          }
                        }
                  }
                />
              );
            })}
          </div>
        </div>
        <p className="info">
          You have selected <span className="count text-green-500">{selectedSeats.length}</span> seat{selectedSeats.length !== 1 && 's'} for the price of{' '}
          <span className="total text-green-500">₹{selectedSeats.length * selectedMovie.price}</span>
          <div className="seatno mr-4">
            {selectedSeats.length ? (
              <span>Seat No: {selectedSeats.join(', ')}</span>
            ) : (
              <h4>Seats not selected</h4>
            )}
          </div>
        </p>
      </div>

      <div class="child2 bg-gray-100 p-4 rounded border border-black">
  <h2 class="text-lg font-bold mb-2">Selected Tickets</h2>
  {selectedSeats.length > 0 ? (
    <ul class="selected-tickets-list">
      {selectedSeats.map((seat, index) => (
        <li key={seat} class="mb-2">
          <span class="font-bold">Seat No:</span> {seat}
        </li>
      ))}
    </ul>
  ) : (
    <p>No tickets selected</p>
  )}
  {selectedSeats.length > 0 && (
    <div class="info">
      <span class="count font-bold">Selected Seats:</span>
      <span class="total font-bold">{selectedSeats.length}</span>
    </div>
  )}
  {selectedSeats.length > 0 && (
    <div class="info">
      <span class="count font-bold">Total Amount:</span>
      <span class="total font-bold">₹{selectedSeats.length * selectedMovie.price}</span>
    </div>
  )}

  <button
    class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    onClick={handleNextPage}
  >
    Proceed to Next Page
  </button>
</div>

    </div>
  );
}
