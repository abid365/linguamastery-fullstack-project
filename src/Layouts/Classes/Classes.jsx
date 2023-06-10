import React, { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle";
import axios from "axios";
import AvailableClass from "../../Components/AvailableClass";

const Classes = () => {
  const [activeCourses, setActiveCourses] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/inst`)
      .then((res) => res.json())
      .then((data) => setActiveCourses(data));
  }, []);

  return (
    <div>
      <PageTitle
        heading={"Available Classes"}
        subHeading={
          "Tip: It's better to study about you interested subjects pros/cons before you enroll"
        }
      ></PageTitle>
      <div className="my-10 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:ml-16 ml-7">
        {activeCourses.map((course) => (
          <AvailableClass course={course} key={course._id}></AvailableClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
