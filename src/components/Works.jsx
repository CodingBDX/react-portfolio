import React from "react";
import WorkImg from "../assets/Screenshot_2022-03-18 welcome to the kingdom of colchis.jpg";
import NODEJSCHAT from "../assets/Screenshot_2022-03-18 ChatCord App.png";
import JSFLAPPYBIRD from "../assets/Screenshot_2022-03-18 Document.png";

const Works = () => {
  return (
    <div
      name="Works"
      className="w-full md:h-screen bg-[#0a192f]   text-gray-300 "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bhutuka inline border-b-4 text-gray-300 border-pink-600">
            Works
          </p>
          <p className="py-6">/ / Somes stuffs</p>
        </div>

        <div className="grid sm:grid-cols-2   md:grid-cols-3  gap-4">
          <div
            style={{ backgroundImage: `url("${NODEJSCHAT}")` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            <div className="opacity-0 group-hover:opacity-100 ">
              <span className="text-2xl font-bhutuka text-white font-bold tracking-wider">
                nodejs && socket.io{" "}
              </span>
              <div className="pt-8 text-center">
                <a href="https://codingbdx-nodejs-chat.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-pink-600 text-lg font-bhutuka">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/CodingBDX/nodejs-chat">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-pink-600 text-lg font-bhutuka">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url("${JSFLAPPYBIRD}")` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bhutuka text-white font-bold tracking-wider">
                Javascript && Kaboom.js{" "}
              </span>
              <div className="pt-8 text-center">
                <a href="https://flappycodingbdx.herokuapp.com/index.html">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-pink-600 text-lg font-bhutuka">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/CodingBDX/javascript/tree/main/prototype/flappy">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-pink-600 text-lg font-bhutuka">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url("${WorkImg}")` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bhutuka text-white font-bold tracking-wider">
                Html && Bootstrap for Wildcodeschool
              </span>
              <div className="pt-8 text-center">
                <a href="https://wildcodeschoolcodingbdx.herokuapp.com/index.html">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-pink-600 text-lg font-bhutuka">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/CodingBDX/wilcodeschool">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-pink-600 text-lg font-bhutuka">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
