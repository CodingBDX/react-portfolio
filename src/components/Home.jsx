import React from "react";
import Video from "../assets/Standing on the edge of a boat.mp4";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div>
      <div className="">
        <video
          autoPlay
          muted
          loop
          plays-inline
          className="w-full h-screen object-center object-cover lg:w-full lg:h-full "
          src={Video}
        ></video>
      </div>
      <div className="top-[35%] left-[20vw] right-[20vw] bg-[#0a192f] mx-auto px-8 justify-center absolute  ">
        <p className="text-pink-600">Hi, my nickname is</p>
        <h1 className="text-gray-100 text-4xl sm:text-7xl">CodingBDX</h1>
        <h2 className="text-gray-300 text-4xl sm:text-7xl">
          i'm Full Stack Developper
        </h2>
        <p className="text-gray-200 py-4 max-w-[700px]">
          from Wild Code School, it's a passion and i'm very happy to share my
          imagination with U
        </p>
        <div>
          <button className="group text-white border-2 py-4 px-6 flex items-center m-[10px] hover:bg-pink-600 hover:border-pink-600">
            View Works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
