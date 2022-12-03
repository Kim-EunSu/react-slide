import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/61/d7/de/7c/61d7de7c1e57d2738276.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://www.sisa-news.com/data/photos/20211147/art_163755602893_e1a4bc.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://gradium.co.kr/wp-content/uploads/healthy-diet.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
