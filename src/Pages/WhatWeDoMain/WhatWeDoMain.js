import React from 'react';
import "./WhatWeDoMain.css"
import "../CommonCSS/CommonStyle.css"
import art from "../../Media/child-working.png"


const WhatWeDoMain = () => {
    return (
        <div className='mt-12'>
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

            <div className='mt-8 lg:mt-24 md:mt-16  md:px-16 px-6'>

                <div className='flex_problem'>
                    <div className='p_width1'>
                        <img src={art} alt="" />
                    </div>
                    <div className='p_width2'>
                        <h1 className='common_head  mb-4 md:mb-8'>How serious the problem</h1>
                        <div className='c_flex'>
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
                </div>

            </div>
        </div>
    );
};

export default WhatWeDoMain;