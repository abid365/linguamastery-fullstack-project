import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import DashSelectedClass from "../../../Components/DashSelectedClass";

const MySeClasses = () => {
  const { user, loading } = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const url = `http://localhost:5000/myclass?user=${user?.email}`;

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
      fetch(`http://localhost:5000/myclass/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          res.json();
        })
        .then((data) => {
          console.log(data);
        });
    }
  };

  return (
    <div className="h-full w-full mt-10 flex flex-col items-center">
      <h1 className="text-center text-lg font-bold text-blue-600 border border-slate-50 bg-slate-100 shadow-md pt-3 px-2 pb-1 rounded-lg w-fit">
        Number of Selected Classes: {myClasses.length}
      </h1>

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
