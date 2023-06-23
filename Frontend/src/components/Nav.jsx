import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navlinks = [
    {
      title: 'Home',
      link: '/',
    },
    {
      title: 'Search',
      link: '/search',
    },
    {
      title: 'Buy',
      link: '/buy',
    },
    {
      title: 'My Account',
      link: '/account',
    },
  ];

  return (
    <div className="bg-black p-4 z-20">
      <div className="max-w-[1240px] py-2  flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-3xl text-red-500 hover:text-red-600 hover:cursor-pointer font-bold">
            <BiMoviePlay className="inline text-4xl" />ReactShowTime
          </span>
          <div className="hidden md:block">
            <ul className="flex space-x-6 text-red-500 font-semibold">
              {navlinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.link}
                    className="hover:text-red-600 hover:cursor-pointer ml-10"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            className="bg-gray-800 text-gray-200 px-3 py-2 rounded-md placeholder-gray-500 focus:outline-none focus:ring focus:border-red-500"
            placeholder="Search..."
          />
          <BsSearch className="text-red-500 text-2xl cursor-pointer" />
        </div> */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <>
              {/* User avatar */}
              <img
                src={user.picture}
                alt={user.name}
                className="w-8 h-8 rounded-full ml-10 cursor-pointer"
              />
              {/* Username */}
              <span className="text-white ml-2">{user.name}</span>
              {/* Logout button */}
              <button
                onClick={() => logout({ returnTo: window.location.origin })}
                className="hover:text-red-600 hover:cursor-pointer ml-2"
              >
                Logout
              </button>
            </>
          ) : (
            // Login button
            <button
              onClick={() => loginWithRedirect()}
              className="hover:text-red-600 hover:cursor-pointer ml-10"
            >
              Login
            </button>
          )}
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          {toggle ? (
            <AiOutlineClose
              onClick={() => setToggle(!toggle)}
              className="text-red-500 text-3xl block"
            />
          ) : (
            <AiOutlineMenu
              onClick={() => setToggle(!toggle)}
              className="text-red-500 text-3xl block"
            />
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={`duration-500 md:hidden w-full h-screen text-red-500 font-semibold fixed bg-black backdrop-filter backdrop-blur-sm bg-opacity-90 top-[5rem] ${
            toggle ? 'left-0' : '-left-full'
          }`}
        >
          {navlinks.map((link) => (
            <li key={link.title} className="p-5">
              <Link
                to={link.link}
                className="hover:text-red-600 hover:cursor-pointer"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
