import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import DashSelectedClass from "../../../Components/DashSelectedClass";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const MySeClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const url = `https://assignment-12-server-green.vercel.app/myclass?user=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyClasses(data));
  }, [url]);

  // handle delete function: delete items by id
  const handleDelete = (id) => {
    console.log("Item Id for Deletation", id);
    const proceed = confirm("Delete this item?");

    if (proceed) {
      fetch(`https://assignment-12-server-green.vercel.app/myclass/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            toast("🚮 Items Deleted!", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            const remaining = myClasses.filter((item) => item._id !== id);
            setMyClasses(remaining);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="h-full w-full mt-10 flex flex-col items-center">
      <ToastContainer
        position="top-center"
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
      {myClasses.length ? (
        <h1 className="text-center text-lg font-bold text-blue-600 border border-slate-50 bg-slate-100 shadow-md pt-3 px-2 pb-1 rounded-lg w-fit">
          Number of Selected Classes: {myClasses.length}
        </h1>
      ) : (
        <div>
          <h1>No classes Found</h1>
          <div className="divider text-xs">or</div>
          <p className="text-xs text-center">Refresh The Page</p>
        </div>
      )}

      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-2">
        {myClasses.map((myClass) => (
          <DashSelectedClass
            myClass={myClass}
            key={myClass._id}
            handleDelete={handleDelete}
          ></DashSelectedClass>
        ))}
      </div>
    </div>
  );
};

export default MySeClasses;
