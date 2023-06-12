import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill, BsGoogle } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const { signUp, updateUserProfile } = useContext(AuthContext);
  const [passVisible, setPassVisible] = useState(false);
  const { googleSignIn } = useContext(AuthContext);
  // const [matchPass, setMatchPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const toggler = () => {
    setPassVisible(!passVisible);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signUp(data.email, data.password)
      .then((res) => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const signedUser = res.user;
            // console.log(signedUser);
            const saveUser = { name: data.name, email: data.email };

            if (signedUser) {
              // posting data to user collection
              fetch(`https://assignment-12-server-green.vercel.app/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => {
                  res.json();
                })
                .then((data) => {
                  console.log(data);
                  reset();
                  toast("❤️️ Account Created Successfully", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  });
                  navigate("/");
                });
            }
          })
          .catch((error) => {
            console.log(error);
            toast("An Error Occured", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            reset();
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const matchPassword = password === confirmPassword;

  // handle google
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        if (res) {
          toast("❤️️ Successfully Loggedin", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        if (error) {
          toast("💔 Something Went Wrong", {
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
      <div className="hero min-h-screen">
        <div>
          <div className="card border-2 border-slate-800 flex-shrink-0 w-full max-w-lg shadow-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  // name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name?.type === "required" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Name is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  // name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Email is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="https://example.com"
                  // name="email"
                  className="input input-bordered"
                  {...register("photoURl", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Photo URL is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type Your Password</span>
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type={passVisible ? "text" : "password"}
                    // type="text"
                    placeholder="password"
                    // name="password"
                    className="input input-bordered"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
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
                {errors.password?.type === "minLength" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Password must be atleast 6 characters
                  </p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    uppercase, number and special character required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Your Password</span>
                </label>
                <div className="flex items-center gap-1">
                  <input
                    type={passVisible ? "text" : "password"}
                    // type="text"
                    placeholder="confirm password"
                    // name="password"
                    className="input input-bordered"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 6,
                    })}
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
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Password must be atleast 6 characters
                  </p>
                )}
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-sm pt-2 text-red-400 mt-1">
                    Password is required
                  </p>
                )}
                {matchPassword ? (
                  <p className="text-xs text-emerald-300 pt-1">
                    Password match
                  </p>
                ) : (
                  <p className="text-xs text-red-400 pt-1">
                    Password don't match
                  </p>
                )}
                <label className="label">
                  <small className="hover:text-slate-500 mt-1 pt-1">
                    Already have an account?{" "}
                    <Link className="font-bold underline" to="/login">
                      Log in
                    </Link>{" "}
                    here
                  </small>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Sign in"
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
    </div>
  );
};

export default SignUp;
