import React, { useEffect, useState } from "react";
import PageTitle from "../../Components/PageTitle";
import SingleInstrct from "../../Components/SingleInstrct";

const Instructors = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/inst`)
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div>
      <PageTitle
        heading={"Instructors at a Glance"}
        subHeading={"Our Popular Instructors From Across the Globe"}
      ></PageTitle>
      <div className="overflow-x-auto border-y p-1  border-slate-800">
        <table className="table md:table-sm lg:table-md">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Classes Taken</th>
              <th>Role</th>
              <th>Details</th>
            </tr>
          </thead>
          {teachers.map(
            (teacher) => (
              <SingleInstrct
                teacher={teacher}
                key={teacher._id}
              ></SingleInstrct>
            )
            // console.log(teacher)
          )}
        </table>
      </div>
    </div>
  );
};

export default Instructors;
