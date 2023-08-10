import React from "react";

const Promo = () => {
  return (
    <div className="my-40 border-t-2 border-slate-300">
      <h1 className="text-5xl font-bold text-center pt-20">
        Why Choose Lingua Mastery?
      </h1>
      {/* 1st section of promo */}
      <div className="my-28 grid lg:grid-cols-2 grid-cols-1 justify-between items-center ">
        {/* 1st col */}
        <div className="lg:order-last">
          <h1 className="text-5xl tracking-wider font-bold my-3 text-[#fe8c40] ps-3">
            <span className="hidden lg:block">free.fun.effective</span>
            <span className="block lg:hidden">free fun effective</span>
          </h1>
          <p className="text-sm text-slate-500 w-3/4">
            Learning with Lingua Mastery is fun, and{" "}
            <span className="font-bold text-indigo-500">
              research shows that it works!
            </span>
            With quick, bite-sized lessons, you’ll earn points and unlock new
            levels while gaining real-world communication skills.
          </p>
        </div>
        {/* 2nd col */}
        <div>
          <img
            src="https://i.ibb.co/BVrP61c/WFH-be-like.gif"
            alt="image of girl"
          />
        </div>
      </div>
      {/* 2nd section of promo */}
      <div className="my-28 grid lg:grid-cols-2 grid-cols-1 justify-between items-center ">
        {/* 1st col */}
        <div className="sm:order-last lg:order-first">
          <h1 className="text-5xl tracking-wider font-bold my-3 ps-3 text-[#68d9ae]">
            backed by science
          </h1>
          <p className="text-sm text-slate-500 w-3/4">
            We use a combination of research-backed teaching methods and
            delightful content to create courses that effectively teach reading,
            writing, listening, and speaking skills!
          </p>
        </div>
        {/* 2nd col */}
        <div>
          <img src="https://i.ibb.co/rw88Xnf/Digital-growth.png" alt="Growth" />
        </div>
      </div>
      {/* 3rd section of promo */}
      <div className="my-28 grid lg:grid-cols-2 grid-cols-1 justify-between items-center ">
        {/* 1st col */}
        <div className="lg:order-last">
          <h1 className="text-5xl tracking-wider font-bold my-3 ps-3 text-[#68d9ae]">
            stay motivated
          </h1>
          <p className="text-sm text-slate-500 w-3/4">
            We make it easy to form a habit of language learning with game-like
            features, fun challenges, and reminders from our friendly mascot,
            Linda the parrot.
          </p>
        </div>
        {/* 2nd col */}
        <div>
          <img
            src="https://i.ibb.co/rs3YHMP/airplane-animation.gif"
            alt="Air plane"
          />
        </div>
      </div>
    </div>
  );
};

export default Promo;
