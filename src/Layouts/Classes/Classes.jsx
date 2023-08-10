import React, { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle";
import axios from "axios";
import AvailableClass from "../../Components/AvailableClass";
import Loader from "../../Components/Loader";

const Classes = () => {
  const [activeCourses, setActiveCourses] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(`https://assignment-12-server-green.vercel.app/inst`)
      .then((res) => res.json())
      .then((data) => setActiveCourses(data));

    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <div>
      <PageTitle
        heading={"Available Classes"}
        subHeading={
          "Tip: It's better to study about you interested subjects pros/cons before you enroll"
        }
      ></PageTitle>
      {loader ? (
        <Loader></Loader>
      ) : (
        <div className="my-10 grid grid-cols-1 gap-4 lg:grid-cols-3 place-items-center">
          {activeCourses.map((course) => (
            <AvailableClass course={course} key={course._id}></AvailableClass>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
