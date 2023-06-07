import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar mb-5 px-5 flex items-center justify-between">
      <div className="font-bold text-2xl">
        <p className="text-indigo-500">LinguaMastery</p>
      </div>
      <div className="flex gap-5 font-bold">
        <Link className="text-slate-500 hover:text-slate-700">Home</Link>
        <Link className="text-slate-500 hover:text-slate-700">Instructors</Link>
        <Link className="text-slate-500 hover:text-slate-700">Classes</Link>
        <Link className="text-slate-500 hover:text-slate-700">Dashboard</Link>
        <Link className="text-slate-500 hover:text-slate-700">About</Link>
      </div>
      <div>
        <button className=" pt-2 pb-1 px-3 font-bold border border-slate-700 rounded-2xl bg-white opacity-70 hover:bg-black hover:text-white hover:shadow-md">
          Join Our Courses
        </button>
      </div>
    </div>
  );
};

export default NavBar;
