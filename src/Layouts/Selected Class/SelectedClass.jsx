import React, { useContext } from "react";
import { BsFillArrowUpRightCircleFill, BsPeopleFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import PageTitle from "../../Components/PageTitle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    teacher,
    description,
    course_price,
    title,
    _id,
    available_seats,
    image_url,
  } = data;
  // console.log(data);

  // post data to backend
  const handleAddCourse = (event) => {
    event.preventDefault();
    // console.log("Kire gadha");
    const selected = {
      teacher,
      description,
      course_price,
      title,
      available_seats,
      image_url,
      user: user?.email,
    };

    fetch(`https://assignment-12-server-green.vercel.app/myclass`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(selected),
    })
      .then((res) => {
        if (res.ok) {
          confirm("Wanna Add This Item?");
          toast("✅ SuccessFully Added!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.error("Failed To Add");
        }
      })
      .catch((error) => {
        toast.error("error occured");
      });
  };

  return (
    <div>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      ></ToastContainer>
      <PageTitle heading={"Add Your Course"}></PageTitle>
      <div className="mx-10 my-10 flex flex-col justify-center items-center gap-4">
        <div className="w-fit rounded-3xl px-5 py-4 justify-self-center shadow-lg border-2 border-slate-800 bg-slate-50">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold w-4/5 text-slate-800">{title}</h1>
            <div className="badge badge-neutral pt-2">${course_price}</div>
          </div>
          <p className="my-5 text-lg border-l-2 px-2">
            <MdTipsAndUpdates className="text-lg text-indigo-400 inline-block mb-2 mr-1 animate-pulse"></MdTipsAndUpdates>
            {description}
          </p>
          {/* avatar and name */}
          <div className="flex items-center gap-3 my-2">
            <div className="avatar">
              <div className="w-12 rounded-full ring">
                <img src={image_url} />
              </div>
            </div>
            <div>
              <h1 className="font-semibold text-base">{teacher}</h1>
              <p className="text-xs text-emerald-400">
                <BsPeopleFill className="inline-block"></BsPeopleFill>{" "}
                Availaable Seats: {available_seats}
              </p>
            </div>
            {/* <Link className="text-2xl hover:text-indigo-500 ml-5">
              <BsFillArrowUpRightCircleFill></BsFillArrowUpRightCircleFill>{" "}
            </Link> */}
            <button
              className="pt-2 pb-1 px-3 rounded-lg border border-slate-700 hover:bg-slate-100 capitalize font-bold"
              onClick={handleAddCourse}
            >
              add this course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedClass;
