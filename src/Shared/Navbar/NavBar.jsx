import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((removed) => {
        console.log(removed);
        if (typeof removed === "undefined") {
          toast("🐳 Logged out Successfully", {
            position: "bottom-center",
            autoClose: 3000,
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
            autoClose: 3000,
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <nav className="mb-5 px-5 py-5 border border-b=2 lg:flex lg:items-center lg:justify-between hidden bg-[#F8F8FF]">
        <div className="font-extrabold text-xl">
          <Link to="/" className="text-indigo-500">
            Lingua Mastery
          </Link>
        </div>
        <div className="flex gap-5 text-xs">
          <Link
            to="/"
            className="text-slate-700 hover:text-slate-700 hover:underline"
          >
            Home
          </Link>
          <Link
            to="/instructors"
            className="text-slate-700 hover:text-slate-700 hover:underline"
          >
            Instructors
          </Link>
          <Link
            to="/classes"
            className="text-slate-700 hover:text-slate-700 hover:underline"
          >
            Classes
          </Link>
          <Link
            to="/dashboard"
            className="text-slate-700 hover:text-slate-700 hover:underline"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="text-slate-700 hover:text-slate-700 hover:underline"
          >
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
              className=" pt-2 pb-1 px-3 font-bold border border-slate-700 rounded-lg bg-white opacity-70 hover:bg-black hover:text-white hover:shadow-md"
            >
              Log in
            </Link>
          )}
        </div>
      </nav>
      {/* responsive navbar */}
      <div className="px-5 py-5 w-full ms-1 relative z-50 lg:hidden bg-[#FFFAFA]">
        <div className="font-bold text-2xl flex justify-between items-center ">
          <div>
            <Link to="/" className="text-indigo-500">
              LinguaMastery
            </Link>
          </div>
          <div>
            <button onClick={toggleMenu} className="btn btn-md btn-outline">
              Menu
            </button>
            {menuOpen && (
              <ul className="absolute dropdown-content border-2 border-slate-800 menu p-2 right-4 mt-3 shadow bg-white rounded-box w-40 text-center px-6">
                <li className="my-1">
                  <Link to="/">Home</Link>
                </li>
                <li className=" mb-1">
                  <Link to="/instructors">Instructors</Link>
                </li>
                <li className=" mb-1">
                  <Link to="/classes">Classes</Link>
                </li>
                <li className=" mb-1">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                {user ? (
                  <li className=" mb-1">
                    <Link onClickCapture={handleLogOut}>Log out</Link>
                  </li>
                ) : (
                  <li className=" mb-1 animate-pulse text-green-500">
                    <Link to="/login">Log in</Link>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
