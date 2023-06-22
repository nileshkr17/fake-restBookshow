import React from 'react';
import './nav.css';
import { SiBookmyshow } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a icon={SiBookmyshow} href="/">BookMyShow</a>
      </div>
      <div className="navbar-links">
        <a href="/movies">Movies</a><br></br>
        <a href="/events">Events</a><br></br>
        <a href="/sports">Sports</a><br></br>
        <a href="/offers">Offers</a><br></br>
      </div>
      <div className="navbar-account">
        <a href="/login">Log In</a><br></br>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
