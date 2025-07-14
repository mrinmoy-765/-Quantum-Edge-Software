import React, { useState } from "react";
import logo from "../assets/logo.png";
import { BiCategory } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar bg-[#071400] p-4 lg:px-8 flex flex-wrap justify-between items-center">
      {/* Left Side:  */}
      <div className="flex items-center gap-3.5">
        <img
          src={logo}
          alt="Logo"
          className="w-[12rem] sm:w-[14.625rem] h-auto"
        />
        <div className="hidden md:flex items-center gap-2 text-[#05AF2B] border-[#05AF2B] border-2 rounded-2xl px-2 py-1">
          <BiCategory className="h-[1.125rem] w-[1.125rem]" />
          <button className="text-sm">Categories</button>
        </div>
      </div>

      {/*  Right Side */}
      <div className="hidden lg:flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative flex items-center bg-[#FFFFFF1A] rounded-md overflow-hidden w-full max-w-md">
          <select className="text-white bg-[#88888838] rounded-lg m-1.5 px-3 py-2 pr-8 appearance-none focus:outline-none text-sm">
            <option className="text-black">Freelancer</option>
            <option className="text-black">Web Developer</option>
            <option className="text-black">UI/UX Designer</option>
          </select>
          <div className="absolute left-[100px] pointer-events-none">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-white pl-2 pr-4 py-2 focus:outline-none w-full"
          />
        </div>
        {/*  Buttons */}
        <button className="bg-transparent border-none text-[#05AF2B] text-sm whitespace-nowrap">
          BECAME A SELLER
        </button>
        <button className="btn shadow-none p-0 m-0 bg-transparent border-none text-white">
          LOGIN
        </button>
        <button className="btn bg-[#05AF2B] border-none text-white rounded-full px-4 py-2">
          Registration
        </button>
      </div>

      {/*  Hamburger Toggle (Visible on Mobile) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/*  Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-6 mt-6 w-full">
          {/* Search Bar */}
          <div className="relative flex items-center bg-[#FFFFFF1A] rounded-md overflow-hidden w-full max-w-md">
            <select className="text-white bg-[#88888838] rounded-lg m-1.5 px-3 py-2 pr-8 appearance-none focus:outline-none text-sm">
              <option className="text-black">Freelancer</option>
              <option className="text-black">Web Developer</option>
              <option className="text-black">UI/UX Designer</option>
            </select>
            <div className="absolute left-[100px] pointer-events-none">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-white pl-2 pr-4 py-2 focus:outline-none w-full"
            />
          </div>
          {/* Buttons */}
          <button className="bg-transparent border-none text-[#05AF2B] text-sm whitespace-nowrap">
            BECAME A SELLER
          </button>
          <button className="btn shadow-none p-0 m-0 bg-transparent border-none text-white">
            LOGIN
          </button>
          <button className="btn bg-[#05AF2B] border-none text-white rounded-full px-4 py-2 w-full sm:w-auto">
            Registration
          </button>
          {/* Categories */}
          <div className="flex md:hidden items-center gap-2 text-[#05AF2B] border-[#05AF2B] border-2 rounded-full px-2 py-2 w-full justify-center ">
            <BiCategory className="h-[1.125rem] w-[1.125rem]" />
            <button className="text-sm">Categories</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
