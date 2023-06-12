import React from "react";
import { BsFillArrowUpRightCircleFill, BsPeopleFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

const AvailableClass = (props) => {
  // console.log(props.course);
  const {
    course_price,
    teacher,
    enrolled_students,
    image_url,
    title,
    description,
    course_img,
    _id,
  } = props.course;
  return (
    <div>
      <div className="card w-72 rounded-3xl px-5 py-4 justify-self-center shadow-lg border-2 border-slate-800 bg-slate-50">
        <div>
          <div className="flex justify-between">
            <h1 className="text-lg font-bold w-4/5 text-slate-800">{title}</h1>
            <div className="badge badge-neutral pt-2">$ {course_price}</div>
          </div>
          <p className="my-5 text-xs border-l-2 px-2">
            <MdTipsAndUpdates className="text-lg text-indigo-400 inline-block mb-2 mr-1 animate-pulse"></MdTipsAndUpdates>
            {description}
          </p>
          {/* avatar and name */}
          <div className="flex items-center justify-between my-4">
            <div className="flex gap-2 items-center">
              <div className="avatar">
                <div className="w-8 rounded-full ring">
                  <img src={image_url} />
                </div>
              </div>
              <div>
                <h1 className="font-semibold text-xs">{teacher}</h1>
                <p className="text-xs">
                  <BsPeopleFill className="inline-block"></BsPeopleFill>{" "}
                  Enrolled: {enrolled_students}
                </p>
              </div>
            </div>
            <Link
              to={`/myclass/${_id}`}
              className="text-sm border border-indigo-500 px-2 pt-2 pb-1 rounded-lg hover:text-indigo-500 ml-5"
            >
              <BsFillArrowUpRightCircleFill className="inline-block"></BsFillArrowUpRightCircleFill>{" "}
              Get Now
            </Link>
          </div>
          <div>
            <img
              className="rounded-xl border border-sky-200 p-1 my-2"
              src={course_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableClass;
