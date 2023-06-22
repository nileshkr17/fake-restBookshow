import React from 'react'
import '../index.css'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
    const [toggle, setToggle] = useState(false);
 

    const navlinks = [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "Pricing",
        link: "/pricing",
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
  return (
    <div className="bg-black p-4">
    <div className="max-w-[1240px] py-2  flex justify-between items-center mx-auto">
      <div
        className="text-3xl
                   text-red-500 hover:text-red-600 
                    hover:cursor-pointer font-bold "
      >
        MovieFlix <BiMoviePlay className="inline text-4xl" />
      </div>
      {/* hamburger */}
      {toggle ? (
        <AiOutlineClose
          onClick={() => {
            setToggle(!toggle);
          }}
          className="text-red-500 text-3xl md:hidden block"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => {
            setToggle(!toggle);
          }}
          className="text-red-500 text-3xl md:hidden block"
        />
      )}

      <ul className="hidden md:flex  text-red-500  font-semibold gap-20">
        {navlinks.map(link => (
          // with acnhor tag
          <li>
            <a
              href={link.link}
              key={link.title}
              className="hover:text-red-600 hover:cursor-pointer"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* mobilemenu-- */}
      <ul
        className={` duration-500 md:hidden w-full h-screen text-red-500  font-semibold fixed bg-black backdrop-filter backdrop-blur-sm bg-opacity-90 top-[5rem] 
            ${toggle ? "left-[0]" : "left-[-100%]"}
          `}
      >
        {navlinks.map(link => (
          // with acnhor tag
          <li key={link.title} className="p-5">
            <a
              href={link.link}
              key={link.title}
              className="hover:text-red-600 hover:cursor-pointer"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default Nav