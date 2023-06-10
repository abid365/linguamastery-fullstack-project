import React, { useEffect, useState } from "react";
import PopInsTable from "../../../Components/PopInsTable";
import { Link } from "react-router-dom";
import { BsDiscord, BsMastodon, BsTwitter } from "react-icons/bs";

const PopIns = () => {
  const [popIns, setPopIns] = useState([]);

  useEffect(() => {
    fetch(`popularclass.json`)
      .then((res) => res.json())
      .then((data) => setPopIns(data));
  }, []);

  return (
    <div className="my-20 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
      {/* first grid item */}
      <div>
        <div className="overflow-x-auto border-2 p-1 rounded-2xl border-slate-50 bg-slate-100 shadow-lg">
          <table className="table md:table-sm lg:table-md">
            <thead>
              <tr>
                <th>Name</th>
                <th>Enrolled Students</th>
                <th>Role</th>
                <th>Details</th>
              </tr>
            </thead>
            {popIns.map((instructor) => (
              <PopInsTable
                instructor={instructor}
                key={instructor.id}
              ></PopInsTable>
            ))}
          </table>
        </div>
      </div>
      {/* second grid item */}
      <div className="flex flex-col items-start gap-5">
        <div>
          <h1 className="text-5xl font-bold capitalize text-justify">
            Our Most popular<br></br> instructors
          </h1>
          <p className="text-justify text-xs pr-3 mt-4">
            The best instructors inspire with knowledge and passion,<br></br>{" "}
            fostering growth and curiosity. They engage students through
            clarity,
            <br></br>
            empathy, and tailored support. These mentors shape minds,<br></br>{" "}
            empowering lifelong learning and achievement.
          </p>
        </div>
        <div className="flex flex-col items-start gap-7">
          <div className="mt-5 border p-4 bg-indigo-400 border-slate-800 rounded-xl w-fit">
            <h1 className="text-lg text-white font-bold">
              Schedule with mentor
            </h1>
            <p className="text-xs text-slate-100">
              Take the very best advice from our mentors.<br></br> Sharpen your
              learning curve and<br></br> make the journey more enjoyable
            </p>
          </div>
          <div className="mt-2 w-fit">
            <h1 className="font-semibold underline">Join Our Community:</h1>
            <div className="mt-3 flex gap-2">
              <Link>
                <BsTwitter className="text-3xl text-sky-300"></BsTwitter>
              </Link>
              <Link>
                <BsDiscord className="text-3xl text-indigo-400"></BsDiscord>
              </Link>
              <Link>
                <BsMastodon className="text-3xl text-indigo-500"></BsMastodon>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopIns;
