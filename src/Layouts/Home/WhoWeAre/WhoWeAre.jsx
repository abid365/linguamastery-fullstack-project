import React from "react";
import { HiPaperAirplane } from "react-icons/hi";

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center my-10 lg:py-32 py-16 border-t-2">
      <div>
        <img
          className="absolute -z-10"
          src="/src/assets/Curve Line.svg"
          alt=""
        />
        <div className=" px-5 py-3">
          <h1 className="text-5xl text-slate font-bold mt-10">Who We Are?</h1>
          <div className="bg-white w-fit px-3 py-2 rounded-xl border-2 border-slate-50 shadow-2xl">
            <p className="mt-2">
              <HiPaperAirplane className="inline-block text-xl text-black"></HiPaperAirplane>
              We Empower Yourself with Proficiency in<br></br> Multiple
              Languages through our State-of-the-Art<br></br> Learning Website!"
            </p>
            <p className="mt-2 text-xs border-2 p-3 border-slate-800 rounded-xl mb-3">
              🦄 Elevate Your Language Skills: Experience Dynamic<br></br>{" "}
              Learning Adventures and Achieve Fluency on our<br></br>{" "}
              Game-Changing Language Learning Website!<br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-slate-50 rounded-xl p-1 shadow-2xl bg-white">
        <img src="https://i.ibb.co/k5dchQq/ceo-linguamastery.png" alt="" />
      </div>
    </div>
  );
};

export default WhoWeAre;
