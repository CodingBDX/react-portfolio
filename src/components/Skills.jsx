import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";

import FIREBASE from "../assets/firebase.png";
import GITHUB from "../assets/github.png";
import NODE from "../assets/node.png";
import REACT from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className=" bg-[#0a192f] text-gray-300">
      <div className="mx-auto max-w-[1000px] p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl font-bold inline border-b-4  border-pink-600 ">
            Experiences
          </p>
          <p className="m-2">
            / / technologie i use for my differente projects
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={HTML} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={CSS} alt="css" />
            <p className="my-4">CSS</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={JAVASCRIPT} alt="javascript" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={FIREBASE} alt="firebase" />
            <p className="my-4">FIREBASE</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={GITHUB} alt="github" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={NODE} alt="node" />
            <p className="my-4">NODE</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img className="w-20 mx-auto" src={REACT} alt="react" />
            <p className="my-4">REACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
