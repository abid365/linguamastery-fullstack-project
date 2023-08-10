import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const ClassbyInstructor = () => {
  const { user } = useContext(AuthContext);
  const [instClass, setInstClass] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/inst/pending?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="h-full w-full mt-10">
      <h1 className="text-center">Classes Added By Instructor</h1>
    </div>
  );
};

export default ClassbyInstructor;
