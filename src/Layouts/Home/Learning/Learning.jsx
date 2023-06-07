import React from "react";
import { BsCameraVideo, BsFillArrowRightCircleFill } from "react-icons/bs";

const Learning = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 lg:flex lg:justify-between lg:flex-row">
      {/* 1st card */}
      <div className="border border-opacity-100 pt-4 pb-1 px-3 lg:w-fit w-full rounded-2xl bg-black">
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
      <div className="lg:w-fit w-full border-2 border-slate-600 shadow-md pt-4 pb-1 px-3 rounded-2xl">
        <div className="flex justify-between items-center">
          <button className="btn btn-sm btn-circle bg-slate-800">
            <BsCameraVideo className="text-lg text-white hover:text-black"></BsCameraVideo>
          </button>
          <div className="badge badge-success badge-outline pt-1">Online</div>
        </div>
        <h1 className="capitalize text-2xl font-bold mt-3">
          The Learning<br></br> Process is simple
        </h1>
        <p className="Pt-3 text-xs pb-1 text-slate-500">
          Online classes bridge the gap between physical<br></br> distance and
          knowledge, opening doors to<br></br> limitless educational
          opportunities.
        </p>
      </div>
      {/* 3rd card */}
      <div className="flex flex-col gap-3">
        <div className="stats stats-vertical lg:stats-horizontal shadow border-2 border-slate-700">
          <div className="stat">
            <div className="stat-title">Total Courses</div>
            <div className="stat-value">231+</div>
            <div className="stat-desc">Courses and Subjects</div>
          </div>

          <div className="stat">
            <div className="stat-title">Instructors</div>
            <div className="stat-value">123+</div>
            <div className="stat-desc">↗︎ 2000 Estimated hours</div>
          </div>

          <div className="stat">
            <div className="stat-title">Active Users</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">Worldwide</div>
          </div>
        </div>
        {/* avatar */}
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHFN7bfeP8Dp5Jx_g4jyNAQbBdRbUqYl2pw&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9NVBIOk_blWPFbW7lJfwX3FNO6jMIsDdZg&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8CldTqNpzN9ENCGC79zNXg6EfcqEHXTLjQg&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6twYLxjXmo4QmF54BuinvoY8R2VZ3r3okxg&usqp=CAU" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarVCKQ1G1MqiLW1f5lWTTbiXFx7J85M7csw&usqp=CAU" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-12 bg-indigo-500 text-white">
              <span>+3k</span>
            </div>
          </div>
        </div>
        <span className="text-xl font-bold">3k+ Happy Students</span>
        {/* end of avatar */}
      </div>
    </div>
  );
};

export default Learning;
