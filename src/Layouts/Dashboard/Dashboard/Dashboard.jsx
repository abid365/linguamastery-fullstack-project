import React, { useContext } from "react";
import PageTitle from "../../../Components/PageTitle";
import { Link, Outlet } from "react-router-dom";
import {
  BsCreditCardFill,
  BsFillBookmarkCheckFill,
  BsFillCollectionPlayFill,
  BsFillHeartFill,
  BsFillPeopleFill,
  BsHouseFill,
  BsPersonCircle,
  BsStars,
} from "react-icons/bs";
import { AuthContext } from "../../../Providers/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const isAdmin = false;

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
              className="btn btn-primary drawer-button lg:hidden my-8"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {isAdmin ? (
                <>
                  <li>
                    <Link to="/dashboard/manage_classes">
                      <BsFillBookmarkCheckFill className="inline-block" />
                      Manage Classes
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/manage_users">
                      <BsFillPeopleFill className="inline-block"></BsFillPeopleFill>
                      Manage Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/history">
                      <BsCreditCardFill className="inline-block mb-2"></BsCreditCardFill>{" "}
                      Payment History
                    </Link>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
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
              <div className="divider"></div>
              <h1 className="text-center border border-slate-600 rounded-lg p-1 text-slate-700 font-semibold mb-2">
                Interacting As:
              </h1>
              <div className="flex gap-2">
                <div className="avatar online">
                  <div className="w-12 rounded-full items-center">
                    <img src={user?.photoURL} />
                  </div>
                </div>
                <div className="pt-2">
                  <h1>{user?.displayName}</h1>
                  <small>{user?.email}</small>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
