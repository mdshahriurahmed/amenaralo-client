import React from 'react';
import "../../CommonCSS/CommonStyle.css"
import "./WhatWeDo.css"

const WhatWeDo = () => {
    return (
        <div className='mt-8 md:mt-12  md:px-16 px-6'>
            <h1 className='common_head'>WHAT WE DO</h1>
            <div className='mt-5'>
                <div className='flexible-edu'>
                    <div className='edu_img_width'>
                        <img src="https://i.ibb.co/4pphvSL/children-day-16549327424x3.jpg" alt="education_image" className=' w-full rounded-lg' />
                    </div>
                    <div className='edu-text-padding edu-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">Education</h1>
                        <p className="py-6 md:text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div> <button className="btn btn-sm rounded:sm btn-primary md:flex md:justify-start">Get Started</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;