import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";

const PopInsTable = (props) => {
  const {
    language,
    rating,
    teacher,
    enrolled_students,
    image_url,
    title,
    description,
  } = props.instructor;
  return (
    <tbody>
      {/* row 1 */}
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
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
            </div>
            <div>
              <div className="font-bold text-slate-500">{teacher}</div>
              <div className="text-sm opacity-50">
                {rating ? (
                  <div className="badge badge-neutral pt-1 text-white">
                    {rating}
                  </div>
                ) : (
                  <div className="badge badge-neutral pt-1 text-white">_._</div>
                )}
              </div>
            </div>
          </div>
        </td>
        <td>
          {enrolled_students ? (
            <span>
              <BsFillPeopleFill className="inline-block text-slate-500"></BsFillPeopleFill>{" "}
              {enrolled_students}
            </span>
          ) : (
            <span>
              <BsFillPeopleFill className="inline-block text-slate-500"></BsFillPeopleFill>{" "}
              _._
            </span>
          )}

          {/* <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span> */}
        </td>
        <td className="text-slate-800">{language} Instructor</td>
        {/*  <td>
          <button className="btn btn-ghost btn-xs">details</button>
        </td> */}
      </tr>
      {/* row 2 */}
    </tbody>
  );
};

export default PopInsTable;
