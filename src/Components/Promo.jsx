import { LottiePlayer, useLottie } from "lottie-react";
import React from "react";
import webdata from "../../public/05- Web Design Data.json";

const Promo = () => {
  const commonStyles = "";
  const options = {
    animationData: webdata,
    loop: true,
  };
  const { view } = useLottie(options);
  return (
    <div className="my-40 mx-auto">
      {/* 1st section of promo */}
      <div className="my-28 grid sm:grid-cols-2 justify-between">
        {/* 1st col */}
        <div>
          <h1 className="text-4xl font-bold">free.fun.effective</h1>
          <p className="">
            Learning with Lingua Mastery is fun, and{" "}
            <span className="font-bold text-indigo-500">
              research shows that it works!
            </span>
            With quick, bite-sized lessons, you’ll earn points and unlock new
            levels while gaining real-world communication skills.
          </p>
        </div>
        {/* 2nd col */}
        <div>{view}</div>
      </div>
    </div>
  );
};

export default Promo;
