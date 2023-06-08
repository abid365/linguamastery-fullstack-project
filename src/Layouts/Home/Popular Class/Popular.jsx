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
    <div className="my-20 border-t-2 pt-10">
      <h1 className="text-center font-bold text-3xl lg:text-5xl text-black underline decoration-wavy">
        Our Popular Classes
      </h1>
      <div>
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
