import React from "react";

const Home = () => {
  return (
    <div className="my-10 mx-5">
      <div className="grid lg:grid-cols-2 items-start">
        {/* 1st column */}
        <div>
          <h1 className="text-8xl font-extrabold font-sans">
            Best Online<br></br> Language{" "}
            <span className="text-indigo-500">Courses</span>
          </h1>
          <p className="text-slate-600 text-sm mt-2 py-4">
            Unlock your linguistic potential and explore the world through
            language. Our interactive platform offers expert guidance, immersive
            lessons, and real-life practice to help you become a confident
            communicator. Join our community of language enthusiasts and embark
            on a journey of cultural discovery
          </p>
        </div>
        {/* second column */}
        <div>
          <img
            className="h-1/2 w-auto"
            src="https://i.ibb.co/w7LJKdM/Garden-birds-removebg-preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
