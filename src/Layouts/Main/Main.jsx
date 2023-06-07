import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/NavBar";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
