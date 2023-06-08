import React from "react";
import { HiPaperAirplane } from "react-icons/hi";

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center my-10 lg:py-40 py-16 border-y-2">
      <div className="relative">
        <img
          className="absolute -z-10"
          src="/src/assets/Curve Line.svg"
          alt=""
        />
        <div className=" px-5 py-3">
          <h1 className="text-5xl text-slate font-bold mt-10">Who We Are?</h1>
          <p className="text-slate-600 my-4 border-2 border-slate-50 px-4 py-3 rounded-lg shadow-xl w-fit bg-red-400">
            <HiPaperAirplane className="inline-block text-xl text-black"></HiPaperAirplane>
            We Empower Yourself with Proficiency in<br></br> Multiple Languages
            through our State-of-the-Art<br></br> Learning Website!"
          </p>
          <p className="my-6 border-2 border-slate-50 rounded-lg shadow-xl w-fit px-5 py-3 bg-slate-50">
            🦄 Elevate Your Language Skills: Experience Dynamic<br></br>{" "}
            Learning Adventures and Achieve Fluency on our<br></br>{" "}
            Game-Changing Language Learning Website!
          </p>
        </div>
      </div>
      <div className="border-2 border-slate-50 rounded-xl p-1 shadow-2xl">
        <img src="https://i.ibb.co/k5dchQq/ceo-linguamastery.png" alt="" />
      </div>
    </div>
  );
};

export default WhoWeAre;
