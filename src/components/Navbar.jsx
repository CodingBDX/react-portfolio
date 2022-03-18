import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaAddressBook,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className=" fixed w-full h-[80px] flex  justify-between items-center px-4 bg-[#FEF9EF] text-[#FFCB77]">
      <div className="text-[#FE6D73] font-extrabold font-bhutuka  flex text-2xl ">
        <FaAddressBook className="pr-2 text-4xl cursor-pointer " />
        <Link to="/" className="cursor-pointer">
          CodingBDX
        </Link>
      </div>

      <ul className="hidden md:flex ">
        <li className="py-6 text-2xl ml-2 cursor-pointer">
          <Link to="/" smooth={true} duration={300}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl ml-2 cursor-pointer">
          <Link to="about" smooth={true} duration={300}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl ml-2 cursor-pointer">
          <Link to="skills" smooth={true} duration={300}>
            Experiences
          </Link>
        </li>
        <li className="py-6 text-2xl ml-2 cursor-pointer">
          <Link to="Works" smooth={true} duration={300}>
            Works
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="z-10 md:hidden  ">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-10 top-0 left-0 w-full h-screen bg-[#FEF9EF] flex flex-col justify-center items-center"
        }
      >
        <li>
          <Link to="Home">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="skills">Experiences</Link>
        </li>
        <li>
          <Link to="works">Works</Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col pr-6 top-[35%] left-0">
        <ul className="bg-[#FEF9EF] text-[#FFCB77]">
          <li className="justify-between flex w-[140px] border-b-2 border-[#FE6D73] h-[60px] items-center ml-[-110px] hover:ml-[10px] duration-300">
            <a
              href="http://linkedin.com/codingbdx"
              className="flex justify-between items-center w-full text-[#FFCB77]"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="border-b-2 border-[#FE6D73] hover:ml-[-10px] duration-300 justify-between flex w-[140px] h-[60px] items-center ml-[-110px]">
            <a
              href="http://github.com/codingbdx"
              className="flex justify-between items-center w-full text-[#FFCB77]"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="border-b-2 border-[#FE6D73] hover:ml-[-10px] duration-300 justify-between flex w-[140px] h-[60px] items-center ml-[-110px]">
            <a
              href="http://twitter.com/codingbdx"
              className="flex justify-between items-center w-full text-[#FFCB77]"
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="border-b-2 border-[#FE6D73] hover:ml-[-10px] duration-300 justify-between flex w-[140px] h-[60px] items-center ml-[-110px]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-[#FFCB77]"
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
