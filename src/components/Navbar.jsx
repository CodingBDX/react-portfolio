import React, { useState } from "react";
import {FaAddressBook, FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">

      <div className="text-pink-500 flex text-2xl">
<FaAddressBook className="pr-2 text-4xl"/>        CodingBDX
      </div>

      <ul className="hidden md:flex ">
        <li className="py-6 text-2xl">home</li>
        <li className="py-6 text-2xl">about</li>
        <li className="py-6 text-2xl">experiences</li>
        <li className="py-6 text-2xl">contact</li>
      </ul>

      <div onClick={handleClick} className="z-10 md:hidden  ">
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-10 top-0 left-0 w-full h-screen bg-[#0a192F] flex flex-col justify-center items-center"
        }
      >
          <li>home</li>
        <li>about</li>
        <li>experiences</li>
        <li>contact</li>
        
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="bg-[#0a192f] text-gray-300">
          <li className="justify-between flex w-[160px] border-b-2 border-gray-300 h-[60px] items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="border-b-2 border-gray-300 hover:ml-[-10px] duration-300 justify-between flex w-[160px] h-[60px] items-center ml-[-100px]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="border-b-2 border-gray-300 hover:ml-[-10px] duration-300 justify-between flex w-[160px] h-[60px] items-center ml-[-100px]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="border-b-2 border-gray-300 hover:ml-[-10px] duration-300 justify-between flex w-[160px] h-[60px] items-center ml-[-100px]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resum <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
