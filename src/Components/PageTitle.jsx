import React from "react";

const PageTitle = ({ heading, subHeading }) => {
  return (
    <div className="relative">
      <div>
        <h1 className="text-5xl font-bold text-slate-700 pt-2 text-center mt-5">
          {heading}
        </h1>
        <p className="text-center text-sm font-slate-400 py-2">{subHeading}</p>
      </div>
      <img
        className="absolute -z-10 bottom-0"
        src="/src/assets/Animated Shape.svg"
        alt=""
      />
    </div>
  );
};

export default PageTitle;
