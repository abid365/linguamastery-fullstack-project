import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const [homeLoader, setHomeLoader] = useState(true);
useEffect(() => {
  setTimeout(() => {
    setHomeLoader(false);
  }, 3000);
}, []);

const Main = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <div className="sticky top-0 z-50">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
