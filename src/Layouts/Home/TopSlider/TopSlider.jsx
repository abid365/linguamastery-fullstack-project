import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

const TopSlider = () => {
  return (
    <div className="mt-40 lg:grid lg:gap-0 lg:grid-cols-3 lg:grid-flow-row-dense lg:items-center">
      {/* left column */}
      <div>
        <div className="w-fit relative">
          <h1 className="capitalize text-6xl text-black font-bold">
            top ranked<br></br> courses
          </h1>
          <img
            className="h-16 absolute top-14 left-60"
            src="https://i.ibb.co/M7wP6Nc/curved-arrow.png"
            alt=""
          />
          <p className="capitalize text-xs text-slate-700">
            Start a spaish language learning course with<br></br> us.You can
            learn the
            <br></br> most requested digital courses
          </p>
          <div className="flex gap-2 mt-4">
            <div className="badge badge-outline pt-2">Spanish</div>
            <div className="badge badge-outline pt-2">বাংলা</div>
            <div className="badge badge-outline pt-2">Arabic</div>
          </div>
        </div>
      </div>
      {/* swiper slider */}
      <div className="mt-20 lg:mt-0 lg:col-span-2">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="rounded-r-3xl rounded-b-3xl"
              src="https://i.ibb.co/LS9x7cc/3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-t-3xl rounded-l-3xl"
              src="https://i.ibb.co/52N4Ztt/4.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-r-3xl rounded-b-3xl"
              src="https://i.ibb.co/4MfMyqK/5.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-t-3xl rounded-l-3xl "
              src="https://i.ibb.co/0FVZQY6/6.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-r-3xl rounded-b-3xl "
              src="https://i.ibb.co/HBxpL4P/7.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-t-3xl rounded-l-3xl "
              src="https://i.ibb.co/16z1FZq/8.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="rounded-r-3xl rounded-b-3xl "
              src="https://i.ibb.co/Wvx0RKr/9.png"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TopSlider;
