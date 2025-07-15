import React, { useState } from "react";
import group from "../assets/group.jpg";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FaLock } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="bg-white py-12  relative overflow-hidden">
      <div
        className="absolute top-[32px] left-[101px] w-[227px] h-[206px] bg-[#05AF2B] opacity-[0.57] blur-[173.4px] rounded-full z-0"
        aria-hidden="true"
      ></div>
      <div className="max-w-6xl mx-auto bg-[#071400] my-12 rounded-lg flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-50 p-8 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[405px] h-[368px] bg-[#05AF2B] opacity-[0.27] blur-[173.4px] rounded-full z-0"
          aria-hidden="true"
        ></div>

        <div className="text-center w-md flex flex-col items-center">
          <p className="text-4xl md:text-4xl font-bold text-white">
            Open Your Account
          </p>
          <p className="text-white mt-4 max-w-sm">
            Already have an account?{" "}
            <Link to="">
              <span className="text-[#05AF2B]"> Sign in</span>
            </Link>
          </p>
          <form action="" className="space-y-3.5">
            <label className="input validator bg-transparent text-[#4B4B4B] rounded-full w-xs border-[#05AF2B] mt-6 focus-within:ring-2 focus-within:ring-[#05AF2B] focus-within:border-[#05AF2B]">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="focus:outline-none focus:ring-0"
              />
            </label>
            {/* Password Field */}
            <label className="input bg-transparent text-[#4B4B4B] rounded-full border-[#05AF2B]   focus-within:ring-2 focus-within:ring-[#05AF2B] focus-within:border-[#05AF2B] flex items-center justify-between">
              <FaLock />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="bg-transparent focus:outline-none flex-1"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-[#4B4B4B] focus:outline-none"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </label>

            {/* Confirm Password Field */}
            <label className="input bg-transparent text-[#4B4B4B] rounded-full border-[#05AF2B] focus-within:ring-2 focus-within:ring-[#05AF2B] focus-within:border-[#05AF2B] flex items-center justify-between">
              <FaLock />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm Password"
                required
                className="bg-transparent focus:outline-none flex-1"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="text-[#4B4B4B] focus:outline-none"
              >
                {showConfirm ? <FiEyeOff /> : <FiEye />}
              </button>
            </label>
            <button className="btn bg-[#05AF2B] border-none text-white rounded-full w-xs px-8 py-2  hover:bg-[#049424]">
              Create Account
            </button>
          </form>
          <div className="divider before:bg-[#4B4B4B] after:bg-[#4B4B4B] my-10">
            <span className="text-white">OR</span>
          </div>
          {/* social */}
          <div className="flex gap-9">
            <FaFacebookF className="w-[6.5rem] h-[3rem] bg-[#1E1E1E] text-white p-2 rounded-full" />
            <FaApple className="w-[6.5rem] h-[3rem] bg-[#1E1E1E] text-white p-2 rounded-full" />
            <BsTwitterX className="w-[6.5rem] h-[3rem] bg-[#1E1E1E] text-white p-2 rounded-full" />
          </div>
          <p className="text-sm font-semibold mt-5 text-[#888888] text-center leading-none">
            By joining, you agree to the Fiverr{" "}
            <span className="text-[#05AF2B]">
              <a href="">
                {" "}
                <u>Terms of Service</u>
              </a>
            </span>{" "}
            and to occasionally receive emails from us. Please read our{" "}
            <span className="text-[#05AF2B]">
              <a href="">
                <u>Privacy Policy</u>
              </a>
            </span>{" "}
            to learn how we use your personal data.
          </p>
        </div>
        {/* image */}
        <div className="relative z-10 w-full lg:w-2/3 overflow-hidden ">
          <img
            src={group}
            alt="A group of professionals working together"
            className="w-full h-auto lg:h-[40rem] object-cover  inverted-radius rounded-lg"
          />
          <button className="absolute top-1 right-3 bg-[#1A1A1A] text-[#05AF2B] rounded-full text-2xl px-4 py-2">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
