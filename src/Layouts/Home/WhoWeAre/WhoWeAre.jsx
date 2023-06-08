import React from "react";
import { HiPaperAirplane } from "react-icons/hi";

const WhoWeAre = () => {
  return (
    <div>
      <div className="relative">
        <img
          className="absolute -z-10"
          src="/src/assets/Curve Line.svg"
          alt=""
        />
        <div className=" px-5 py-3">
          <h1 className="text-5xl text-slate font-bold mt-10">Who We Are?</h1>
          <p className="text-black my-4 border border-slate-800 px-4 py-3 rounded-lg shadow-xl w-fit bg-indigo-500">
            <HiPaperAirplane className="inline-block text-xl text-black"></HiPaperAirplane>
            We Empower Yourself with Proficiency in<br></br> Multiple Languages
            through our State-of-the-Art<br></br> Learning Website!"
          </p>
          <p className="my-6 border border-slate-700 rounded-lg shadow w-fit px-5 py-3 bg-slate-50">
            🦄 Elevate Your Language Skills: Experience Dynamic<br></br>{" "}
            Learning Adventures and Achieve Fluency on our<br></br>{" "}
            Game-Changing Language Learning Website!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
