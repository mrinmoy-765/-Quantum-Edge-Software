import React from "react";
import logo from "../assets/logo.png";
import { SiFacebook } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import footer from "../assets/footer.jpg";

const Footer = () => {
  return (
    // Use responsive padding: smaller on mobile, larger on desktop
    <div className="bg-[#071400] px-6 md:px-12 lg:px-24 py-9">
      {/* Div 1: Call to Action */}
      <div className="flex flex-col lg:flex-row justify-center items-center text-white gap-8 lg:gap-16 text-center lg:text-left">
        {/* Use responsive font size and add max-width for readability */}
        <span className="text-2xl lg:text-3xl font-bold max-w-md">
          Reach Your Requirement Goals Right on Schedule
        </span>
        <div className="">
          <p className="text-base font-normal">
            Sign up, complete your profile, and start browsing projects. Submit
            proposals and communicate with clients to get hired.
          </p>
          {/* Center the button on mobile */}
          <div className="flex justify-center lg:justify-start">
            <button className="btn bg-[#05AF2B] border-none text-white rounded-full px-6 py-2 mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Div 2: Footer Links Grid */}
      {/*
        Responsive Grid:
        - 1 column on mobile (default)
        - 2 columns on tablets (md:)
        - 4 columns on desktops (lg:)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-8">
        {/* Item 1: Logo */}
        <div className="border-t border-[#CCCCCC] py-14 px-2">
          <img src={logo} alt="Logo" className="w-[13.25rem] h-[3.625rem]" />
        </div>

        {/* Item 2: About */}
        <div className="text-white border-t border-[#CCCCCC] py-14 px-2">
          <h1 className="font-semibold text-lg">About</h1>
          <ul className="list-none text-base space-y-1 mt-2">
            <li>
              <a href="#" className="hover:text-[#05AF2B]">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#05AF2B]">
                Become Seller
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#05AF2B]">
                ProProJobs
              </a>
            </li>
          </ul>
        </div>

        {/* Item 3: Categories */}
        <div className="text-white border-t lg:border border-[#CCCCCC] py-14 px-2 flex justify-center items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="font-semibold text-lg">Categories</h1>
            <ul className="list-none text-base space-y-1 mt-2">
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Design & Creative
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Development & IT
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Music & Audio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Programming & Tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Item 4: Support */}
        <div className="text-white border-t border-b border-[#CCCCCC] py-14 px-2 flex justify-center items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="font-semibold text-lg">Support</h1>
            <ul className="list-none text-base space-y-1 mt-2">
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#05AF2B]">
                  Terms & Services
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Div 3: Socials and Popular Posts */}
      {/* Stack vertically on mobile, row on desktop */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4">
        <div className="relative">
          <div className="absolute w-[220px] h-[199px] bg-[#05AF2B] opacity-25 rounded-full blur-[173.4px] -top-10 z-0"></div>
          <div className="relative z-10 flex gap-3.5">
            <SiFacebook className="text-[#05AF2B] h-10 w-10" />
            <FaInstagram className="h-10 w-10 bg-[#4B4B4B] p-2 rounded-full text-white" />
            <FaXTwitter className="h-10 w-10 bg-[#4B4B4B] p-2 rounded-full text-white" />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <p className="text-lg font-bold text-white">Our Popular Posts</p>
          {/* Stack posts on small screens, side-by-side on larger */}
          <div className="flex flex-col sm:flex-row mt-2 gap-4">
            <div className="flex items-center gap-2">
              <img
                src={footer}
                alt="Post thumbnail"
                className="w-[6.625rem] h-[4.5rem] rounded-lg"
              />
              <div className="text-white text-sm text-left">
                <p className="font-normal">November 7, 2024</p>
                <p className="font-semibold">
                  Unveils the Best Canadian Cities for Biking
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={footer}
                alt="Post thumbnail"
                className="w-[6.625rem] h-[4.5rem] rounded-lg"
              />
              <div className="text-white text-sm text-left">
                <p className="font-normal">November 7, 2024</p>
                <p className="font-semibold">
                  Unveils the Best Canadian Cities for Biking
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Div 4: Copyright */}
      <div className="border-t border-[#CCCCCC] mt-8 pt-8">
        <p className="font-semibold text-sm text-center text-white">
          © QuantumEdge Software INC. 2025. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
