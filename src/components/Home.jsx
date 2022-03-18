import React from "react";
import Video from "../assets/Standing on the edge of a boat.mp4";
import { Typewriter } from "react-simple-typewriter";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div>
      <div>
        <video
          autoPlay
          muted
          loop
          name="Home"
          className="w-full h-screen object-center object-cover lg:w-full lg:h-full "
          src={Video}
        ></video>
      </div>
      <div className=" z-10 top-[40vh]  left-[10vw] right-[10vw] sm:top-[35%] sm:left-[20vw] sm:right-[20vw] bg-[#FEF9EF] mx-auto px-8 justify-center absolute ">
        <p className="font-bhutuka font-bold text-[#FE6D73]">
          Hi, my nickname is
        </p>
        <h1 className="text-[#FFCB77] font-bhutuka font-bold text-2xl sm:text-7xl">
          CodingBDX
        </h1>
        <h2 className="flex text-[#FFCB77] font-bhutuka font-bold text-3xl sm:text-7xl">
          I'm
          <p className="text-pink-600 font-bhutuka font-bold">
            <Typewriter
              words={["Passionate", "Worker", "Motivate", "Dreamer"]}
              loop={true}
              typeSpeed={150}
              deleteSpeed={110}
              delaySpeed={1000}
            />
          </p>{" "}
          <span className="animate-ping text-gray-50">|</span>
        </h2>
        <p className="text-[#FFCB77] py-4 max-w-[700px]">
          from Wild Code School, it's a passion and i'm very happy to share my
          imagination with U
        </p>
        <div>
          <button className="group text-[#FFCB77] border-2 py-4 px-6 flex items-center m-[10px] border-[#FE6D73] hover:bg-pink-600 hover:border-pink-600">
            <Link to="Works" smooth={true} duration={300}>
              View Works
            </Link>
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
