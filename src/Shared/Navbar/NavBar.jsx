import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((removed) => {
        console.log(removed);
        if (typeof removed === "undefined") {
          toast("🐳 Logged out Successfully", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .catch((error) => {
        if (error) {
          toast("😣 Something went wrong", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="navbar mb-5 px-5 flex items-center justify-between">
        <div className="font-bold text-2xl">
          <Link to="/" className="text-indigo-500">
            LinguaMastery
          </Link>
        </div>
        <div className="flex gap-5 font-bold">
          <Link to="/" className="text-slate-500 hover:text-slate-700">
            Home
          </Link>
          <Link
            to="/instructors"
            className="text-slate-500 hover:text-slate-700"
          >
            Instructors
          </Link>
          <Link to="/classes" className="text-slate-500 hover:text-slate-700">
            Classes
          </Link>
          <Link to="/dashboard" className="text-slate-500 hover:text-slate-700">
            Dashboard
          </Link>
          <Link to="/about" className="text-slate-500 hover:text-slate-700">
            About
          </Link>
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="px-2 pt-2 pb-1 rounded-lg border border-slate-400 text-bold bg-slate-100 shadow-xl hover:bg-indigo-300"
            >
              Log out
            </button>
          ) : (
            <Link
              to="/login"
              className=" pt-2 pb-1 px-3 font-bold border border-slate-700 rounded-2xl bg-white opacity-70 hover:bg-black hover:text-white hover:shadow-md"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
