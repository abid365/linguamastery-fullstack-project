import React from "react";

const Home = () => {
  return (
    <div className="my-10 mx-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* 1st column */}
        <div>
          <h1 className="text-8xl font-extrabold font-sans">
            Best Online<br></br> Language{" "}
            <span className="text-indigo-500">Courses</span>
            <img
              className="h-20 w-auto inline-block"
              src="/src/assets/arrows (1).svg"
              alt=""
            />
          </h1>
          <p className="text-slate-600 text-sm mt-2 py-4">
            Unlock your linguistic potential and explore the world through
            language. Our interactive platform offers expert guidance, immersive
            lessons, and real-life practice to help you become a confident
            communicator. Join our community of language enthusiasts and embark
            on a journey of cultural discovery
          </p>
          <button className="px-2 pt-2 pb-1 border border-slate-200 rounded-3xl bg-purple-400 hover:bg-purple-500 text-white">
            Get Started
          </button>
        </div>
        {/* second column */}
        <div>
          <img
            src="https://i.ibb.co/KFx6b89/Image-for-Summer-school-project-removebg-preview.png"
            alt="Summer school cover photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
