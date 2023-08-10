import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TbWebhook } from "react-icons/tb";
import { BsApple, BsGooglePlay } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-base-200 text-base-content">
      <div className="">
        <h1 className="text-xl font-extrabold text-white">
          Lingua Mastery LLC
        </h1>
        <p className="text-slate-200">
          Spring Field, United States{" "}
          <CiLocationArrow1 className="inline-block font-bold"></CiLocationArrow1>{" "}
        </p>
        <p className="text-xs font-semibold text-slate-500 w-2/4 text-justify">
          Lingua Mastery is a dynamic language education institution dedicated
          to helping individuals master new languages and expand cultural
          horizons. Our team of passionate instructors provides immersive
          learning for language enthusiasts of all ages and skill levels.
        </p>
        <div className="my-3">
          <h1 className="text-white font-bold">
            Download Our App <TbWebhook className="inline"></TbWebhook>
          </h1>
          {/* google app store and i store section */}
          <div className="flex items-center gap-2">
            <div className="border rounded-md px-2 py-2 my-2">
              <p className="text-xs">Download app from</p>
              <div className="flex items-end gap-2">
                <BsGooglePlay className="inline-block text-2xl"></BsGooglePlay>
                <h1>Play Store</h1>
              </div>
            </div>
            <div className="border rounded-md px-2 py-2 my-2">
              <p className="text-xs">Download app from</p>
              <div className="flex items-end gap-2">
                <BsApple className="inline-block text-2xl"></BsApple>
                <h1>App Store</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
