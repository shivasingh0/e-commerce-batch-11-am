import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const Carousoul = () => {
  return (
    <>
      <Swiper
        className="w-full h-full"
        loop={true}
        slidesPerView={1}
        centeredSlides={true}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
            className="h-full w-auto aspect-video"
            src="https://img.freepik.com/free-psd/black-friday-super-sale-web-banner-template_106176-1671.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://static.vecteezy.com/system/resources/thumbnails/003/692/291/small/of-12-12-big-sale-shopping-day-banner-with-blank-product-podium-scene-vector.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full"
            src="https://img.freepik.com/free-vector/sale-banner-with-product-description_1361-1333.jpg?semt=ais_hybrid"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousoul;
