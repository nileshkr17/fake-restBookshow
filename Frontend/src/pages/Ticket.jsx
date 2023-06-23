import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import '../pages/Ticket.css';

const Ticket = () => {
  const ticketRef = useRef();

  const downloadTicket = () => {
    html2canvas(ticketRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'ticket.png';
      link.click();
    });
  };

  const storedCustomerName = JSON.parse(localStorage.getItem('customerName'));
  const storedMovieName = JSON.parse(localStorage.getItem('movieName')) || '';
  const storedTime = JSON.parse(localStorage.getItem('time'))?.slice(0, 21);
  const storedSeatNumber = JSON.parse(localStorage.getItem('seatNumber'));

  const seatNumbers = storedSeatNumber ? storedSeatNumber.split(',').map(Number) : [];

  // Generate a random code value (can be replaced with the actual ticket information)
  const codeValue = Math.random().toString(36).substr(2, 10);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="ticket-container sm:mt-[10rem]">
        <div className="ticket" ref={ticketRef}>
          <div className="card card-left w-64 sm:w-72 md:w-96">
            <h1 className="text-xl font-bold">Movie Cinema</h1>
            <div className="title">
              <h2 className="text-sm text-gray-600">{storedMovieName}</h2>
              <span className="text-xs text-gray-500">Movie</span>
            </div>
            <div className="name">
              <h2 className="text-sm text-gray-600">{storedCustomerName}</h2>
              <span className="text-xs text-gray-500">Customer</span>
            </div>
            <div className="time">
              <h2 className="text-sm text-gray-600">{storedTime}</h2>
            </div>
          </div>

          <div className="card card-right w-24 sm:w-32">
            <div className="eye"></div>
            <div className="number">
              <h3 className="text-2xl font-bold">
                {seatNumbers.map((seatNumber, index) => (
                  <span key={index} className="seat-number  text-black">
                    {seatNumber}
                  </span>
                ))}
              </h3>
              <span className="text-xs mt-9 text-gray-700">
                Seat number{seatNumbers.length > 1 ? 's' : ''}
              </span>
            </div>
            <div className="code">
              <h2 className="text-lg font-extrabold text-black ">{codeValue}</h2>
              <span className="text-xs text-black">Unique Code</span>
            </div>
          </div>
        </div>
        <button
          onClick={downloadTicket}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
        >
          Download Ticket
        </button>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>
            Phone: 123-456-7890 <br />
            Email: info@example.com <br />
            Website: www.example.com
          </p>
        </div>

        <div className="terms-conditions">
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
