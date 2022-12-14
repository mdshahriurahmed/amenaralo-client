import React from 'react';
import "./WhatWeDoMain.css"
import "../CommonCSS/CommonStyle.css"
import art from "../../Media/child-working.png"
import child_school from "../../Media/child-school.png"
import Gallery from '../Gallery/Gallery';
import GoToTop from '../GoToTop/GoToTop';


const WhatWeDoMain = () => {
    return (
        <div className='mt-16 mb-32'>
            <div className=' banner-content-we w-full banner-content-all'>
                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>What We Do</b> </h1>
                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?

                    </p>
                </div>



            </div>
            <div className='mt-8 md:mt-28  md:px-16 px-6'>
                <div className='flexible-prob'>
                    <div className='prob_img_width'>
                        <img src="https://i.ibb.co/4pphvSL/children-day-16549327424x3.jpg" alt="education_image" className=' w-full rounded-lg' />
                    </div>
                    <div className='prob-text-padding prob-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">Education</h1>
                        <p className="py-6 md:text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div> <button className="btn btn-sm rounded:sm btn-primary md:flex md:justify-start">Get Started</button></div>
                    </div>
                </div>
            </div>
            <div className='art-bg mt-8 lg:mt-24 md:mt-16 w-full'>
                <div className='  md:px-16 px-6 pb-10'>

                    <div className='flex_problem'>
                        <div className='p_width1'>
                            <img src={art} alt="" />
                        </div>
                        <div className='p_width2'>
                            <h1 className='common_head  mb-4 md:mb-8'>How serious the problem</h1>
                            <div className='c_flex'>
                                <div className='h_width'>
                                    <h3 className='second_head'>WORLDWIDE</h3>
                                    <ul>
                                        <li>124m children/young people have not started school or dropped out</li>
                                        <li>Over a quarter of a billion children are out of school</li>
                                        <li>420m children will not learn the most basic skills.</li>
                                    </ul>
                                </div>
                                <div className='h_width '>
                                    <h3 className='second_head'>IN BANGLADESH</h3>
                                    <ul>
                                        <li>124m children/young people have not started school or dropped out</li>
                                        <li>Over a quarter of a billion children are out of school</li>
                                        <li>420m children will not learn the most basic skills.</li>
                                    </ul>
                                </div>
                            </div >
                        </div>
                    </div>

                </div>

                <div className='  md:px-16 px-6 pb-10'>
                    <div className='flex_help'>

                        <div className='p_width2'>
                            <h1 className='common_head  mb-4 md:mb-8'>How we are helping?</h1>
                            <h3 className='md:text-2xl text-base font-bold md:-mt-5 -mt-3'>Here's a few of the things we're doing:</h3>
                            <div className='c_flex mt-1 md:mt-3'>
                                <div className='h_width'>

                                    <ul>
                                        <li>124m children/young people have not started school or dropped out</li>
                                        <li>Over a quarter of a billion children are out of school</li>
                                        <li>420m children will not learn the most basic skills.</li>
                                    </ul>
                                </div>
                                <div className='h_width '>

                                    <ul>
                                        <li>124m children/young people have not started school or dropped out</li>
                                        <li>Over a quarter of a billion children are out of school</li>
                                        <li>420m children will not learn the most basic skills.</li>
                                    </ul>
                                </div>
                            </div >
                        </div>
                        <div className='p_width1'>
                            <img src={child_school} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 md:mt-28  md:px-16 px-6'>
                <div className='flexible-prob'>
                    <div className='prob_img_width'>
                        <img src="https://i.ibb.co/vYNvD05/s-going-boy.jpg" alt="tonmoy_image" type="image/webp" className=' w-full rounded-lg' />
                    </div>
                    <div className='prob-text-padding prob-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">How We're Helping Tonmoy</h1>
                        <p className="py-6 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                    </div>
                </div>
            </div>

            <Gallery></Gallery>
            <GoToTop></GoToTop>
        </div>
    );
};

export default WhatWeDoMain;