import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
        className="mySwiper"
      >
        <SwiperSlide><img  src="https://i.ibb.co/nLSWr2m/banner-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/nLSWr2m/banner-2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/nLSWr2m/banner-2.png" alt="" /></SwiperSlide>
     
   
      </Swiper>
    </div>
  );
};

export default Slider;
