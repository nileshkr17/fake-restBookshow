// Nav.js
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const navlinks = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Search",
      link: "/search",
    },
    {
      title: "Buy",
      link: "/buy",
    },
    {
      title: "My Account",
      link: "/account",
    },
  ];

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`bg-${darkMode ? "black" : "white"} p-4 z-20 shadow-lg`}>
      <div className="max-w-[1240px] py-2  flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-3xl text-red-500 hover:text-red-600 hover:cursor-pointer font-bold">
            <BiMoviePlay className="inline text-4xl" />
            ReactShowTime
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
              <span className="text-[#ef4444] ml-2">{user.name}</span>
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

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 text-sm rounded-md ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        <ul
          className={`duration-500 md:hidden w-full h-screen text-${
            darkMode ? "dark" : "light"
          }.font-semibold fixed bg-${
            darkMode ? "dark" : "light"
          }.backdrop-filter.backdrop-blur-sm bg-opacity-90 top-[5rem] ${
            toggle ? "left-0" : "-left-full"
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
