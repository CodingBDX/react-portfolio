import React from "react";
const About = () => {
  return (
    <div name="about" className=" bg-[#0a192f] text-gray-300 h-screen w-full">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-4xl text-right font-bold">
            <p>Hey i'm Antony from france, thank for look my Portfolio</p>
          </div>
          <div>
            <p className="text-gray-100 sm:text-2xl font-extrabold font-bhutuka">
              i'm passionate into coding since 20 years, coding from amstrad and
              Ibm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
