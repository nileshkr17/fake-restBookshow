import React from 'react';
import '../pages/Ticket.css';

const Ticket = () => {
  const storedCustomerName = JSON.parse(localStorage.getItem('customerName'));
  const storedPin = JSON.parse(localStorage.getItem('pin'));
  const storedMovieName = JSON.parse(localStorage.getItem('movieName'));
  const storedSeatNumber = JSON.parse(localStorage.getItem('seatNumber'));
  // cut the time and date from the string
  const storedTime = JSON.parse(localStorage.getItem('time')).slice(0, 21);

  const seatNumbers = storedSeatNumber.split(',').map(Number);

  return (
    <div className="c w-[50%] mx-auto mt-10">
      <div className="card card-left bg-gradient-to-b from-blue-400 to-gray-300 mb-20">
        <h1 className="text-xl  font-bold">Movie Cinema</h1>
        <div className="title">
          <h2 className="text-sm text-gray-600">{storedMovieName}</h2>
        </div>
        <div className="name">
          <h2 className="text-sm text-gray-600">{storedCustomerName}</h2>
          <span className="text-xs text-gray-500">name</span>
        </div>
        <div className="time">
          <h2 className="text-sm text-gray-600">{storedTime}</h2>
          <span className="text-xs text-gray-500">time</span>
        </div>
      </div>

      <div className="card card-right">
        <div className="eye"></div>
        <div className="number">
          <h3 className="text-2xl font-bold text-blue-400">
            {seatNumbers.map((seatNumber, index) => (
              <span key={index} className="seat-number">
                {seatNumber}
              </span>
            ))}
          </h3>
          <span className="text-xs text-gray-500">seat number{seatNumbers.length > 1 ? 's' : ''}</span>
        </div>

        <div className="barcode"></div>
      </div>
    </div>
  );
};

export default Ticket;
