import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import { AiTwotoneTrophy } from "react-icons/ai";
import { MdMapsHomeWork } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Promo = () => {
  const stylesServiceDiv = `border-4 rounded-lg p-8 bg-[#fffafa] 
  border-[#f8f8ff]`;
  const iconStyle = `my-1 text-4xl`;
  const h1Style = `text-md my-1 text-lg font-bold`;
  const pStyle = `text-sm my-1`;

  return (
    <div className="my-40 py-24 grid lg:grid-cols-2 grid-cols-1">
      {/* What we provide to yo */}
      <div className="px-2 w-fit">
        <p className="text-sm font-bold my-8  text-indigo-400">Services</p>
        <h1 className="text-6xl font-bold tracking-tight">
          What we<br></br> provide to you
        </h1>
        <p className="my-4 text-sm text-slate-700 text-justify">
          Unleash new horizons with our language learning website. Engaging
          <br></br>
          lessons, personalized progress, limitless opportunities. Start your
          <br></br>journey to fluency today.
        </p>
      </div>
      {/* grid of services */}
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mt-0 mt-5 gap-8">
        <div className={stylesServiceDiv}>
          <BsPeopleFill className={iconStyle} />
          <h1 className={h1Style}>Skilled Lectures</h1>
          <p className={pStyle}>
            Gain expertise from our roster of skilled lectures, guiding you
            toward mastery with precision and insight.
          </p>
        </div>
        <div className={stylesServiceDiv}>
          <AiTwotoneTrophy className={iconStyle} />
          <h1 className={h1Style}>Scholarships</h1>
          <p className={pStyle}>
            Gain expertise from our roster of skilled lectures, guiding you
            toward mastery with precision and insight.
          </p>
        </div>
        <div className={stylesServiceDiv}>
          <MdMapsHomeWork className={iconStyle} />
          <h1 className={h1Style}>Home Projects</h1>
          <p className={pStyle}>
            Gain expertise from our roster of skilled lectures, guiding you
            toward mastery with precision and insight.
          </p>
        </div>
        <div className={stylesServiceDiv}>
          <BiSupport className={iconStyle} />
          <h1 className={h1Style}>24x7 Support</h1>
          <p className={pStyle}>
            Gain expertise from our roster of skilled lectures, guiding you
            toward mastery with precision and insight.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Promo;
