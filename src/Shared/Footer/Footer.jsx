import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { TbWebhook } from "react-icons/tb";
import {
  BsApple,
  BsFacebook,
  BsGooglePlay,
  BsInstagram,
  BsMap,
  BsMastodon,
  BsRssFill,
  BsTwitter,
} from "react-icons/bs";
import { FaCopyright, FaProductHunt } from "react-icons/fa";
import FooterItems from "../../Components/FooterItems";

const Footer = () => {
  return (
    <footer className="p-10 bg-base-200 text-base-content">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full">
        {/* right section of footer */}
        <div>
          <h1 className="text-xl font-extrabold text-white">
            Lingua Mastery LLC
          </h1>
          <p className="text-slate-200 text-xs font-bold">
            Spring Field, United States{" "}
            <CiLocationArrow1 className="inline-block font-bold"></CiLocationArrow1>{" "}
          </p>
          <p className="text-xs font-bold py-2">1234 Elem Street</p>
          <p className="text-xs">
            <BsMap className="inline-block"></BsMap> Camperbell
          </p>
        </div>
        {/* left upper section of footer */}
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
      {/* ---------------------------------------------------------- */}
      {/* second section of footer */}
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4">
        {/* left section of footer */}
        <div>
          <h1 className="text-lg font-semibold text-white">
            <FaProductHunt className="inline-block text-2xl text-red-300"></FaProductHunt>{" "}
            Featured on Product Hunt
          </h1>
          <p className="text-xs font-extrabold my-3">
            Category Spotlight: Unveiling the Latest<br></br> Breakthrough in
            LMS Category
          </p>
          {/* social links */}
          <div className="flex items-center gap-3 mt-5">
            <BsTwitter className="text-2xl" />
            <BsFacebook className="text-2xl" />
            <BsRssFill className="text-2xl" />
            <BsMastodon className="text-2xl" />
            <BsInstagram className="text-2xl" />
          </div>
          <h1 className="lg:mt-14 my-10 text-xs">
            <FaCopyright className="inline-block" /> 2023 Ligua LLC | All Rights
            Reserved
          </h1>
        </div>
        {/* right section of footer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:place-items-end">
          <FooterItems
            headings={"Product"}
            li1={"Overview"}
            li2={"Features"}
            li3={"Solutions"}
            li4={"Tutorials"}
            li5={"Pricing"}
            li6={"Releases"}
          ></FooterItems>
          <FooterItems
            headings={"Product"}
            li1={"Overview"}
            li2={"Features"}
            li3={"Solutions"}
            li4={"Tutorials"}
            li5={"Pricing"}
            li6={"Releases"}
          ></FooterItems>
          <FooterItems
            headings={"Product"}
            li1={"Overview"}
            li2={"Features"}
            li3={"Solutions"}
            li4={"Tutorials"}
            li5={"Pricing"}
            li6={"Releases"}
          ></FooterItems>
          <FooterItems
            headings={"Product"}
            li1={"Overview"}
            li2={"Features"}
            li3={"Solutions"}
            li4={"Tutorials"}
            li5={"Pricing"}
            li6={"Releases"}
          ></FooterItems>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
