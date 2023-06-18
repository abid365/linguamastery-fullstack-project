import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Providers/AuthProvider";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Addaclass = () => {
  const { user } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    const instructor = data;
    if (data) {
      fetch(`https://assignment-12-server-green.vercel.app/inst`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(instructor),
      })
        .then((res) => {
          console.log("Data Passed");
          toast("🦄 Classes Added!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((err) => {
          console.log("err occured");
        });
    }
  };

  return (
    <div className="h-full w-full mt-10">
      <ToastContainer
        position="botom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="card-body">
        <form
          className="grid grid-cols-1 lg:grid-cols-2 gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Title Of Your Course"
              className="input input-bordered"
              {...register("title", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Class Image</span>
            </label>
            <input
              type="url"
              placeholder="Your Class Image"
              className="input input-bordered"
              {...register("course_img", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={user.displayName}
              readOnly
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("teacher")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={user.email}
              readOnly
              type="text"
              placeholder="Email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Available Seats</span>
            </label>
            <input
              type="text"
              placeholder="Available Seats"
              className="input input-bordered"
              {...register("available_seats", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              placeholder="$ Price"
              className="input input-bordered"
              {...register("course_price", { required: true })}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Default Status</span>
            </label>
            <input
              readOnly
              defaultValue={"pending"}
              type="text"
              placeholder="Pending"
              className="badge badge-outline text-center pt-1"
              {...register("status", { required: true })}
            />
          </div>
          <div className="form-control mt-6">
            <input
              className="border border-slate-800 px-4 pt-3 pb-2 rounded-lg bg-slate-100 shadow-md hover:font-bold hover:bg-indigo-400"
              type="submit"
              value="Add Class"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addaclass;
