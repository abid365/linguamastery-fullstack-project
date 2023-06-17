import React from "react";
import { BsFillArrowUpRightCircleFill, BsPeopleFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleClass = (props) => {
  // console.log(props.singleclass);
  const {
    language,
    rating,
    teacher,
    enrolled_students,
    image_url,
    title,
    description,
  } = props.singleclass;

  return (
    <div>
      <div className="lg:w-72 w-fit rounded-3xl px-5 py-4 justify-self-center shadow-lg border-2 border-slate-800 bg-slate-50">
        <div className="flex justify-between">
          <h1 className="text-lg font-bold w-4/5 text-slate-800">{title}</h1>
          {rating ? (
            <span className="badge badge-neutral pt-2">{rating}</span>
          ) : (
            <span className="badge badge-neutral pt-2">---</span>
          )}
        </div>
        {description ? (
          <p className="my-5 text-xs border-l-2 px-2">
            <MdTipsAndUpdates className="text-lg text-indigo-400 inline-block mb-2 mr-1 animate-pulse"></MdTipsAndUpdates>
            {description}
          </p>
        ) : (
          <p className="my-5 text-xs border-l-2 px-2">
            <MdTipsAndUpdates className="text-lg text-indigo-400 inline-block mb-2 mr-1 animate-pulse"></MdTipsAndUpdates>
            Learning a new language is an incredibly enriching experience. It
            allows us to connect with people from different cultures, broadening
            our horizons and fostering cross-cultural understanding
          </p>
        )}
        {/* avatar and name */}
        <div className="flex items-center gap-3 my-2">
          {image_url ? (
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image_url} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          ) : (
            <div className="avatar placeholder">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span className="text-xl pt-1">{teacher[0]}</span>
              </div>
            </div>
          )}
          <div>
            <h1 className="font-semibold text-base">{teacher}</h1>
            {enrolled_students ? (
              <p className="text-xs">
                <BsPeopleFill className="inline-block"></BsPeopleFill> Enrolled
                Students: {enrolled_students}
              </p>
            ) : (
              <p className="text-xs">
                <BsPeopleFill className="inline-block"></BsPeopleFill> Enrolled
                Students: 0
              </p>
            )}
          </div>
          <Link className="text-2xl hover:text-indigo-500 ml-5">
            <BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
