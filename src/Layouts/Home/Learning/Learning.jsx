import React from "react";
import { BsCameraVideo, BsFillArrowRightCircleFill } from "react-icons/bs";

const Learning = () => {
  return (
    <div className="mt-10">
      {/* 1st card */}
      <div className="border border-opacity-100 pt-4 pb-1 px-3 w-fit rounded-2xl bg-black">
        <h1 className="capitalize text-white text-2xl lg:text-3xl font-bold">
          Study At your<br></br> own pace
        </h1>
        <div className="flex items-center gap-2">
          <small className="text-white py-2">
            Studying at your own pace<br></br> empowers you to embrace
            knowledge's<br></br> journey and unlock your full learning
            potential.
          </small>
          <BsFillArrowRightCircleFill className="text-indigo-500 text-2xl my-3"></BsFillArrowRightCircleFill>
        </div>
      </div>
      {/* 2nd card */}
      <div className="w-fit border-2 border-slate-600 shadow-md pt-4 pb-1 px-3 rounded-2xl">
        <div className="flex justify-between items-center">
          <button className="btn btn-sm btn-circle bg-slate-800">
            <BsCameraVideo className="text-lg text-white hover:text-black"></BsCameraVideo>
          </button>
          <div className="badge badge-success badge-outline pt-1">Online</div>
        </div>
        <h1 className="capitalize text-2xl font-bold mt-3">
          The Learning<br></br> Process is simple
        </h1>
      </div>
    </div>
  );
};

export default Learning;
