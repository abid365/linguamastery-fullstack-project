import React from "react";
import PageTitle from "../../../Components/PageTitle";
import { Link, Outlet } from "react-router-dom";
import {
  BsCreditCardFill,
  BsFillBookmarkCheckFill,
  BsFillCollectionPlayFill,
  BsFillHeartFill,
  BsHouseFill,
  BsPersonCircle,
  BsStars,
} from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="mt-10">
      <PageTitle
        heading={"Your Dashboard"}
        subHeading={"Manage all of your courses"}
      ></PageTitle>
      {/* sidemenu */}
      <div className="">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <Outlet></Outlet>
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <li>
                <Link to="/dashboard/selectedClasses">
                  <BsFillBookmarkCheckFill className="inline-block" />
                  My Selected Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/enrolledClasses">
                  <BsFillHeartFill className="inline-block"></BsFillHeartFill>{" "}
                  My Enrolled Classes
                </Link>
              </li>
              <li>
                <Link to="/dashboard/history">
                  <BsCreditCardFill className="inline-block mb-2"></BsCreditCardFill>{" "}
                  Payment History
                </Link>
              </li>
              <div className="divider"></div>
              <li>
                <Link to="/">
                  <BsHouseFill className="inline-block mb-2"></BsHouseFill>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/instructors">
                  <BsPersonCircle className="inline-block mb-2"></BsPersonCircle>
                  Instructors
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <BsFillCollectionPlayFill className="inline-block mb-2"></BsFillCollectionPlayFill>
                  Classes
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <BsStars></BsStars> About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;