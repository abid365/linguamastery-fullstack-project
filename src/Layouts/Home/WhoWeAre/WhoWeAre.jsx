import React from "react";
import { HiPaperAirplane } from "react-icons/hi";

const WhoWeAre = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-start max-h-screen lg:mb-20 mb-10">
      <div>
        {/* <img
          className="absolute -z-20 h-auto w-full bg-cover bg-no-repeat"
          src="/src/assets/Animated Shape.svg"
          alt=""
        /> */}
        <div className=" px-5 py-3 z-10">
          <h1 className="lg:text-6xl text-5xl text-slate font-bold mt-10">
            <HiPaperAirplane className="text-black inline-block"></HiPaperAirplane>
            Who We Are?
          </h1>
          <div className="bg-white w-fit px-3 py-2 ">
            <p className="mt-2 font-bold">
              We Empower Yourself with Proficiency in<br></br> Multiple
              Languages through our State-of-the-Art<br></br> Learning Website!"
            </p>
            <p className="mt-2 text-xs">
              🦄 Elevate Your Language Skills: Experience Dynamic<br></br>{" "}
              Learning Adventures and Achieve Fluency on our<br></br>{" "}
              Game-Changing Language Learning Website!<br></br>
            </p>
          </div>
        </div>
      </div>
      <div className="border-2 border-slate-50 rounded-2xl p-1 shadow-xl bg-slate-100">
        <img
          className="rounded-xl"
          src="https://i.ibb.co/k5dchQq/ceo-linguamastery.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
