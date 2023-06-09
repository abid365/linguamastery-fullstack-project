import React, { useEffect, useState } from "react";
import PopInsTable from "../../../Components/PopInsTable";

const PopIns = () => {
  const [popIns, setPopIns] = useState([]);

  useEffect(() => {
    fetch(`popularclass.json`)
      .then((res) => res.json())
      .then((data) => setPopIns(data));
  }, []);

  return (
    <div className="my-20 py-20 border-t border-slate-400 grid grid-cols-1 lg:grid-cols-2 gap-2 items-start">
      {/* first grid item */}
      <div>
        <div className="overflow-x-auto">
          {popIns.map((instructor) => (
            <PopInsTable
              instructor={instructor}
              key={instructor.id}
            ></PopInsTable>
          ))}
        </div>
      </div>
      {/* second grid item */}
      <div>
        <h1 className="text-5xl font-bold capitalize flex justify-end text-right">
          Our Most popular<br></br> instructors
        </h1>
        <p className="text-right text-xs">
          The best instructors inspire with knowledge and passion,<br></br>{" "}
          fostering growth and curiosity. They engage students through clarity,
          <br></br>
          empathy, and tailored support. These mentors shape minds,<br></br>{" "}
          empowering lifelong learning and achievement.
        </p>
      </div>
    </div>
  );
};

export default PopIns;
