"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const slidesData = [
  { imgSrc: "img/slider/img-1.png", title: "Gold big hoops", price: "$68,00" },
  { imgSrc: "img/slider/img-1.png", title: "Gold big hoops", price: "$68,00" },
  { imgSrc: "img/slider/img-1.png", title: "Gold big hoops", price: "$68,00" },
  { imgSrc: "img/slider/img-1.png", title: "Gold big hoops", price: "$68,00" },
];

function Slide({
  imgSrc,
  title,
  price,
}: {
  imgSrc: string;
  title: string;
  price: string;
}) {
  return (
    <div>
      {" "}
      <img className="w-full relative" src={imgSrc} alt={title} />
      <div className="flex flex-col space-y-5  items-start absolute top-[35%] left-4 mx-3 p-3 w-[395px] h-[94px] text-white ">
        <div className="flex flex-col space-y-2  leading-10">
          <p className="font-medium  text-[32px]">{title}</p>
          <span className="font-thin text-[26px]">{price}</span>
        </div>

        <button className="border-2 rounded-md border-white p-3 w-1/2 font-bold text-white uppercase  leading-[26px]">
          View Product
        </button>
      </div>
    </div>
  );
}

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <Slide {...slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
