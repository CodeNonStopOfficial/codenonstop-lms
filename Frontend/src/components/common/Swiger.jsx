import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
const Swiger = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={800}
      loop={true}
      pagination={{ clickable: true }}
      direction="horizontal" // 👉 RIGHT → LEFT
      className="w-fit md:w-2xl"
    >
      <SwiperSlide>
        <div className="w-full h-85 overflow-hidden rounded-2xl">
          <img
            src="https://static.uacdn.net/thumbnail/store_bundle/landscape/00087f4ce1f4470cb22eed0856194ed0.png?q=75&w=2048&auto=format%2Ccompress"
            alt="Web Development"
            className="w-full h-full object-center"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-85 overflow-hidden rounded-2xl">
          <img
            src="https://static.uacdn.net/thumbnail/banner/9485347534434861b2e97dcbf8f9e04d.file?q=75&auto=format%2Ccompress&w=1200"
            alt="Success Story"
            className="w-full h-full object-center"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="w-full h-85 overflow-hidden rounded-2xl">
          <img
            src="https://template.canva.com/EAGgwMg_xjs/1/0/1600w-_vZ_C8j6rs4.jpg"
            alt="Learning"
            className="w-full h-full object-center"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swiger;
