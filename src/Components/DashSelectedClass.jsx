import React from "react";
import { Link } from "react-router-dom";

const DashSelectedClass = (props) => {
  const {
    available_seats,
    course_price,
    description,
    image_url,
    teacher,
    title,
    _id,
  } = props.myClass;

  /*
    1. handle delete , the delete function seted to upper component and 
    will be pass as props in this componet and than it will be used by destructring first. 

    2. After delete The ui needs to be updated, it can be done by filtering out the deleted item. And re-render the remaining ones
     */

  //todo: handle payment , and show classes in my enrolled classes
  const handlePayment = (price) => {
    console.log(price);
  };

  return (
    <div className="mt-10">
      <div className="border border-slate-300 rounded-lg bg-slate-100">
        <div className="card w-96">
          <div className="card-body">
            <h2 className="card-title text-lg font-bold">{title}</h2>
            <p className="text-xs">{description}</p>
            <div className="flex gap-3 items-center">
              {image_url ? (
                <div className="avatar">
                  <div className="w-9 mask mask-hexagon">
                    <img src={image_url} />
                  </div>
                </div>
              ) : (
                <div className="avatar placeholder">
                  <div className="bg-indigo-500 text-neutral-content rounded-full w-9 mask mask-hexagon">
                    <span className="pt-2">{teacher[0]}</span>
                  </div>
                </div>
              )}
              <h1 className="pt-2 text-xl font-bold">{teacher}</h1>
            </div>
            <small className="badge badge-success pt-1 text-xs">
              Available Seats: {available_seats}
            </small>
            <div className="card-actions">
              <Link to={`/dashboard/payment/${course_price}`}>
                <button
                  onClick={() => handlePayment(course_price)}
                  className="px-2 pt-2 pb-1 border border-slate-400 rounded-md text-xs hover:bg-indigo-200 hover:shadow"
                >
                  ${course_price} Get Now!
                </button>
              </Link>
              <button
                onClick={() => props.handleDelete(_id)}
                className="px-2 pt-2 pb-1 border border-slate-400 rounded-md text-xs hover:bg-indigo-200 hover:shadow"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSelectedClass;
