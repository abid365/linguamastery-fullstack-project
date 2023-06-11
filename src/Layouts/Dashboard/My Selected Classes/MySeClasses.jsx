import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const MySeClasses = () => {
  const { user } = useContext(AuthContext);
  const [myClass, setMyClass] = useState([]);
  const url = `http://localhost:5000/myclass?user=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyClass(data));
  }, []);
  return (
    <div className="h-full w-full mt-10">
      <h1 className="text-center">Show Selected Classses here</h1>
      <p className="text-2xl text-center">{myClass.length}</p>
    </div>
  );
};

export default MySeClasses;
