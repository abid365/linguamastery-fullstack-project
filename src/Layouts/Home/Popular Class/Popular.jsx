import { useEffect, useState } from "react";
import SingleClass from "../../../Components/SingleClass";

const Popular = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch(`popularclass.json`)
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);

  //   ui render
  return (
    <div className="my-20 border-t-2 pt-10 relative">
      <img
        className="absolute -z-10 top-28"
        src="/src/assets/Mass Circles.svg"
        alt=""
      />
      <h1 className="text-center font-bold text-3xl lg:text-5xl text-black underline decoration-wavy">
        Our Popular Classes
      </h1>
      <p className="text-center mt-2">
        Master the World's Languages with Our Diverse Language Courses!
      </p>
      <div className="mt-10 mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 ml-7">
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
