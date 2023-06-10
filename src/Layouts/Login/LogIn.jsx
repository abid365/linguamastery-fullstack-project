import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const LogIn = () => {
  const { logIn, user, googleSignIn } = useContext(AuthContext);
  const [passVisible, setPassVisible] = useState(false);

  const toggler = () => {
    setPassVisible(!passVisible);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password)
      .then((res) => {
        if (res) {
          toast("❤️️ You Successfully Loggedin", {
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
          toast("💔 Something Went Wrong", {
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

  // google sign in
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        alert("success");
      })
      .catch((error) => {
        alert("Error Occured");
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
      {user ? (
        <div>
          <h1 className="capitalize text-3xl font-bold text-center mt-40 text-slate-800">
            Your are Already logged in
          </h1>
        </div>
      ) : (
        <div className="hero min-h-screen">
          <div>
            <div className="card border-2 border-slate-800 flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="flex items-center gap-1">
                    <input
                      type={passVisible ? "text" : "password"}
                      placeholder="password"
                      name="password"
                      className="input input-bordered"
                      {...register("password", { required: true })}
                    />
                    <button
                      onClick={toggler}
                      className="border py-3 px-1 rounded-lg border-slate-300"
                    >
                      {passVisible ? (
                        <BsFillEyeSlashFill className="text-indigo-400"></BsFillEyeSlashFill>
                      ) : (
                        <BsFillEyeFill className="text-indigo-400"></BsFillEyeFill>
                      )}
                    </button>
                  </div>
                  <label className="label">
                    <small className="hover:text-slate-500 mt-1 pt-1">
                      Don't have an account?{" "}
                      <Link className="font-bold underline" to="/signup">
                        Sign Up
                      </Link>{" "}
                      here
                    </small>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Login"
                  />
                </div>
              </form>
              <div className="divider"></div>
              <div className="flex justify-center items-center">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn-circle btn mb-4 btn-neutral"
                >
                  <BsGoogle></BsGoogle>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
