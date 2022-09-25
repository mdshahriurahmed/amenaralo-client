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
                    delay: 3500,
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
                    <div>
                        <img src={slide1} alt="" className="w-full" />
                        <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center contents-center hero-overlay bg-opacity-60">
                            <div className="lg:px-28 md:px-28 px-10">
                                <h3 className="text-primary lg:text-6xl md:text-5xl text-3xl  font-bold md:mb-5 mb-2">Hello there</h3>
                                <p className="text-base-100 mb-2 md:mb-5 md:text-lg text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="bg-primary hover:bg-accent px-3 py-2 rounded-md "><p className="font-medium text-base-100">Get Started</p></button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slide1} alt="" className="w-full" />
                        <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center contents-center hero-overlay bg-opacity-60">
                            <div className="lg:px-28 md:px-28 px-10">
                                <h3 className="text-primary lg:text-6xl md:text-5xl text-3xl  font-bold md:mb-5 mb-2">Hello there</h3>
                                <p className="text-base-100 mb-2 md:mb-5 md:text-lg  text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="bg-primary hover:bg-accent px-3 py-2 rounded-md "><p className="font-medium text-base-100">Get Started</p></button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slide1} alt="" className="w-full" />
                        <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center contents-center hero-overlay bg-opacity-60">
                            <div className="lg:px-28 md:px-28 px-10">
                                <h3 className="text-primary lg:text-6xl md:text-5xl text-3xl  font-bold md:mb-5 mb-2">Hello there</h3>
                                <p className="text-base-100 mb-2 md:mb-5 md:text-lg  text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="bg-primary hover:bg-accent px-3 py-2 rounded-md "><p className="font-medium text-base-100">Get Started</p></button>
                            </div>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={slide1} alt="" className="w-full" />
                        <div className="absolute top-0 h-full w-full flex flex-col justify-center items-center contents-center hero-overlay bg-opacity-60">
                            <div className="lg:px-28 md:px-28 px-10">
                                <h3 className="text-primary lg:text-6xl md:text-5xl text-3xl  font-bold md:mb-5 mb-2">Hello there</h3>
                                <p className="text-base-100 mb-2 md:mb-5 md:text-lg  text-sm">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="bg-primary hover:bg-accent px-3 py-2 rounded-md "><p className="font-medium text-base-100">Get Started</p></button>
                            </div>
                        </div>
                    </div></SwiperSlide>

            </Swiper>
        </>
    );
}
