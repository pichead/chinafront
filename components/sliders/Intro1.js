import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Navigation, Pagination]);

const Intro1 = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        pagination={true}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".custom_prev_i1",
          nextEl: ".custom_next_i1",
        }}
        className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1"
      >
        <SwiperSlide>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{
              backgroundImage: "url(assets/imgs/slider/slider-8.png)",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{
              backgroundImage: "url(assets/imgs/slider/slider-1.png)",
            }}
          ></div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{
              backgroundImage: "url(assets/imgs/slider/slider-3.png)",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="single-hero-slider single-animation-wrap"
            style={{
              backgroundImage: "url(assets/imgs/slider/slider-4.png)",
            }}
          ></div>
        </SwiperSlide> */}
      </Swiper>

      <div className="slider-arrow hero-slider-1-arrow">
        <span className="slider-btn slider-prev slick-arrow custom_prev_i1">
          <i className="fi-rs-angle-left"></i>
        </span>
        <span className="slider-btn slider-next slick-arrow custom_next_i1">
          <i className="fi-rs-angle-right"></i>
        </span>
      </div>
    </>
  );
};

export default Intro1;
