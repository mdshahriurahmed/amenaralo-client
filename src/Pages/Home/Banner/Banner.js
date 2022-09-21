import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../Media/children-day-16549327424x3.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
    return (
        <>
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
                <SwiperSlide><div>
                    <img src={slide1} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <img src={slide1} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <img src={slide1} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <img src={slide1} alt="" />
                </div></SwiperSlide>
                <SwiperSlide><div>
                    <img src={slide1} alt="" />
                </div></SwiperSlide>

            </Swiper>
        </>
    );
}
