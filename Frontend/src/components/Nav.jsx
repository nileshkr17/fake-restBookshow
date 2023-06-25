import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");
  
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
  ];

  const handleLogout = () => {
    localStorage.clear();
    logout({ returnTo: window.location.origin });
  };

  return (
    <div className={`bg-${darkMode ? "black" : "white"} p-4 z-20 shadow-lg`}>
      <div className="max-w-[1240px] py-2 flex justify-between items-center mx-auto">
        <div className="flex items-center space-x-2">
          <span className="text-3xl text-red-500 hover:text-red-600 hover:cursor-pointer font-bold">
          <Link to="/">
            <BiMoviePlay className="inline text-4xl" />
              <span className="ml-1">ReactShowTime</span>
            </Link>
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

        <div className="flex items-center space-x-4 ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-1 text-sm rounded-md ${
              darkMode ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>

          {isAuthenticated ? (
            <div className="hidden md:block">
              <Link to="/account">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full ml-2 cursor-pointer"
                />
              </Link>
              <span className={`text-${darkMode ? "white" : "red-500"} ml-2`}>{user.name}</span>
              <button
                onClick={handleLogout}
                className="hover:text-red-600 hover:cursor-pointer ml-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="hover:text-red-600 hidden md:block hover:cursor-pointer ml-2"
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

        <ul
          className={`duration-500 md:hidden w-full h-screen text-${
            darkMode ? "dark" : "light"
          }.font-semibold fixed bg-${
            darkMode ? "dark" : "light"
          }.backdrop-filter.backdrop-blur-sm bg-opacity-0 z-50 top-[5rem] ${
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
        
        {/*  */}
        {isAuthenticated ? (
          <>
           <Link to="/account">
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-8 h-8 rounded-full ml-2 cursor-pointer"
                />
              </Link>
          <div className="md:hidden p-5">
             
              <span className={`text-${darkMode ? "white" : "red-500"} ml-2`}>{user.name}</span>
              <button
                onClick={handleLogout}
                className="hover:text-red-600 hover:cursor-pointer ml-5"
              >
                Logout
              </button>
            </div>
          </>
            
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="hover:text-red-600 md:hidden hover:cursor-pointer mt-4 ml-5"
            >
              Login
            </button>
          )}
          </ul>
      </div>
    </div>
  );
};

export default Nav;
