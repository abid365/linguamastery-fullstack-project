import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center border-2 border-slate-900 shadow-xl bg-white-100 rounded-xl p-10">
        {/* <h1 className="font-extrabold bg-gradient-to-r from-indigo-600 to-indigo-400 text-transparent bg-clip-text pt-5 text-9xl">
          404
        </h1> */}
        <img
          className="h-32"
          src="/src/assets/undraw_Page_not_found_re_e9o6.png"
          alt=""
        />

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page. </p>

        <Link
          to="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
