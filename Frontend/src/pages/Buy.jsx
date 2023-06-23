import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import "../pages/Buy.css";

// const movies = [
//   {
//     name: 'Avenger',
//     price: 10,
//     occupied: [20, 21, 30, 1, 2, 8],
//   },
//   {
//     name: 'Joker',
//     price: 12,
//     occupied: [9, 41, 35, 11, 65, 26],
//   },
//   {
//     name: 'Toy story',
//     price: 8,
//     occupied: [37, 25, 44, 13, 2, 3],
//   },
//   {
//     name: 'the lion king',
//     price: 9,
//     occupied: [10, 12, 50, 33, 28, 47],
//   },
// ];

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

export default function Buy() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  //
  const [selectedSeats, setSelectedSeats] = useState([]);
  //green seats are selected
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  // time
  const [customerName, setCustomerName] = useState("");
  const [pin, setPin] = useState("");

  const getData = async () => {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/nileshkr17/api-bookmyshowSELF/movies"
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    const isOccupied = selectedMovie.occupied.includes(seat);

    if (isOccupied) {
      return; // Exit the function if the seat is occupied
    }

    if (isSelected) {
      setSelectedSeats(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat)
      );
    } else {
      if (selectedSeats.length < 4) {
        setSelectedSeats([...selectedSeats, seat]);
      } else {
        alert("You cannot select more than 4 seats.");
      }
    }
  }

  const handleCustomerDetails = () => {
    if (customerName && pin === "123") {
      localStorage.setItem("customerName", JSON.stringify(customerName));
      localStorage.setItem("pin", JSON.stringify(pin));
      localStorage.setItem("movieName", JSON.stringify(selectedMovie.title));
      localStorage.setItem(
        "seatNumber",
        JSON.stringify(selectedSeats.join(", "))
      );
      localStorage.setItem(
        "time",
        JSON.stringify(selectedDateTime ? selectedDateTime.toString() : null)
      );

      // Redirect to the ticket page
      window.location.href = "/ticket";
    }
  };

  return (
    <div className="parent grid justify-center mx-auto my-10">
      <div className="child1 p-4 ">
        <div className="Movies mb-6">
          <label htmlFor="movie" className="mb-2">
            Pick a movie
          </label>

          <select
            id="movie"
            value={selectedMovie ? selectedMovie.title : ""}
            onChange={e => {
              const movieTitle = e.target.value;
              const selectedMovie = movies.find(
                movie => movie.title === movieTitle
              );
              setSelectedSeats([]);
              setSelectedMovie(selectedMovie);
            }}
            className="p-2 border rounded"
          >
            {movies.map(movie => (
              <option key={movie.id} value={movie.title}>
                {movie.title} (₹{movie.price})
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
          <li className="mx-2">
            <span className="seat disabled" /> <small>Disabled</small>
          </li>
        </ul>
        <div className="Cinema mb-6">
          <div className="screen bg-white h-12 w-full transform rotate-x-12 scale-110 rounded-lg shadow-md mb-4" />
          <div className="seats grid grid-cols-8 gap-2">
            {seats.map(seat => {
              const isSelected = selectedSeats.includes(seat);
              const isOccupied =
                selectedMovie && selectedMovie.occupied.includes(seat);
              const isDisabled = selectedSeats.length >= 4 && !isSelected;

              return (
                <span
                  tabIndex="0"
                  key={seat}
                  className={clsx(
                    "seat",
                    isSelected && "selected",
                    isOccupied && "occupied",
                    isDisabled && "disabled"
                  )}
                  onClick={() => {
                    if (!isDisabled) {
                      handleSelectedState(seat);
                    }
                  }}
                  onKeyPress={e => {
                    if (e.key === "Enter" && !isDisabled) {
                      handleSelectedState(seat);
                    }
                  }}
                  role="button"
                  aria-disabled={isOccupied || isDisabled}
                  aria-label={`Seat ${seat}`}
                />
              );
            })}
          </div>
        </div>
        <p className="info">
          <div className="seatno mr-4">
            {selectedSeats.length ? (
              <div>
                Selected
                <span className="count text-green-500 m-1">
                  {" "}
                  {selectedSeats.length}
                </span>{" "}
                seat
                {selectedSeats.length !== 1 && "s"} for the price of{" "}
                <span className="total text-green-500 m-1">
                  ₹{selectedSeats.length * selectedMovie.price}
                </span>
                <br /> <span>Seat No: {selectedSeats.join(", ")}</span>
              </div>
            ) : (
              <h4 className="text-orange-500">*Seats not selected</h4>
            )}
          </div>
        </p>
      </div>

      <div className="child2 bg-gray-100 p-4 rounded ">
        <h2 className="text-lg font-bold mb-2">Selected Tickets</h2>
        {selectedSeats.length > 0 ? (
          <ul className="selected-tickets-list flex flex-wrap">
            {selectedSeats.map((seat, index) => (
              <li key={seat} className="mb-2 mr-2">
                <span className="font-bold">Seat No:</span> {seat}
              </li>
            ))}
          </ul>
        ) : (
          <p>No tickets selected</p>
        )}
        {selectedSeats.length > 0 && (
          <div className="info">
            <span className="count font-bold">Selected Seats:</span>
            <span className="total font-bold">{selectedSeats.length}</span>
          </div>
        )}
        {selectedSeats.length > 0 && (
          <div className="info">
            <span className="count font-bold">Total Amount:</span>
            <span className="total font-bold">
              ₹{selectedSeats.length * selectedMovie.price}
            </span>
          </div>
        )}

        {selectedSeats.length >= 4 && (
          <p className="text-black bg-red-300 p-2 rounded">
            You cannot select more than 4 seats.
          </p>
        )}

        <div className="DateTime mt-6">
          <label htmlFor="datetime" className="block mb-2">
            Select Date and Time
          </label>
          <DatePicker
            id="datetime"
            selected={selectedDateTime}
            onChange={date => setSelectedDateTime(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            className="p-2 border rounded"
          />
        </div>

        <div className="CustomerDetails mt-6">
          <label htmlFor="customerName" className="block mb-2">
            Customer Name
          </label>
          <input
            type="text"
            id="customerName"
            value={customerName}
            onChange={e => setCustomerName(e.target.value)}
            className="p-2 border rounded"
          />

          <label htmlFor="pin" className="block mt-4 mb-2">
            Pin (123)
          </label>
          <input
            type="password"
            id="pin"
            value={pin}
            onChange={e => setPin(e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        <button
          className={clsx(
            "confirm-button",
            selectedSeats.length === 0 && "disabled",
            "py-2 px-4 mt-10 rounded bg-blue-500 text-white hover:bg-blue-600"
          )}
          onClick={handleCustomerDetails}
          disabled={selectedSeats.length === 0 || selectedSeats.length > 4}
        >
          Confirm Booking
        </button>

        {customerName && pin !== "123" && (
          <p className="text-red-500 mt-2">
            Invalid pin. Please enter the correct pin (123).
          </p>
        )}
      </div>
    </div>
  );
}
