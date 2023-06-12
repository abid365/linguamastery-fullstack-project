import { useEffect, useState } from "react";
import SingleClass from "../../../Components/SingleClass";

const Popular = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`https://assignment-12-server-green.vercel.app/inst`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  //   ui render
  return (
    <div className="my-20 border-t border-slate-200 pt-10 relative">
      <img
        className="absolute -z-10 top-44"
        src="/src/assets/Mass Circles.svg"
        alt=""
      />
      <h1 className="text-center font-bold text-3xl lg:text-5xl text-black bg-gradient-to-r from-indigo-500 to-purple-400 text-transparent bg-clip-text pt-6">
        Our Popular Classes
      </h1>
      <p className="text-center mt-2">
        Master the World's Languages with Our Diverse Language Courses!
      </p>
      <div className="mt-10 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 lg:ml-16 ml-7">
        {classes.map(
          (sclass) => (
            <SingleClass
              singleclass={sclass}
              key={sclass.teacher}
            ></SingleClass>
          )
          //   console.log(sclass)
        )}
      </div>
    </div>
  );
};

export default Popular;
