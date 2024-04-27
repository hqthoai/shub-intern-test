import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Slider.css";

import { sliders } from "./mockData";
function Slider() {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  return (
    <div className="relative w-full px-4">
      <Swiper
        style={{ paddingTop: "30px" }}
        slidesPerView={2}
        spaceBetween={16}
        loop={true}
        breakpoints={{
          428: {
            slidesPerView: 4,
            spaceBetween: 28,
          },
          744: {
            slidesPerView: 6,
            spaceBetween: 32,
          },
        }}
        modules={[Navigation, Pagination]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}>
        {sliders.map((slider, index) => (
          <SwiperSlide key={slider.id}>
            <div className="flex w-full">
              <img
                src={slider.image}
                alt="img"
                width="100%"
                className={`object-cover rounded-2xl absolute h-full ${
                  index % 2 === 0 ? "top-0" : "-top-[30px]"
                } `}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-[50%] -left-2 z-10"
        style={{
          top: "calc(50% - 24px)",
          boxShadow: "rgba(21, 25, 28, 0.25) 0px 16px 16px",
        }}>
        <button className="p-4 text-xl bg-transparent" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      </div>
      <div
        className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full -right-2 z-10"
        style={{
          top: "calc(50% - 24px)",
          boxShadow: "rgba(21, 25, 28, 0.25) 0px 16px 16px",
        }}>
        <button className="p-4 text-xl bg-transparent" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Slider;
