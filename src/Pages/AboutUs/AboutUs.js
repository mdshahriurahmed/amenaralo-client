import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import "./AboutUs.css"
import bg from "../../Banner/bg.png"
const AboutUs = () => {

    return (
        <div className='mt-12'>
            <div className=' banner-content-about w-full '>
                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>About Us</b> </h1>
                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?

                    </p>
                </div>

            </div>

            <div className='relative  w-full  inspriation'>
                <img src={bg} className='w-full h-full' alt="" />
                <div className='absolute top-0 ins-text w-full '>

                    <div className='md:px-16 px-6 flex flex-col justify-center h-full pb-12'>
                        <h1 className="text-4xl font-bold md:text-start">Our Inspiration</h1>
                        <p className="py-6 text-justify"> <i>  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.  Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. </i></p>

                    </div>


                </div>

            </div>


            <div className='flexible-ceo-video mt-24 md:px-16 px-6'>
                <div className='ceo_img_width '>
                    <LazyLoadComponent>
                        <iframe className='w-full  rounded-lg' height="305" src="https://www.youtube.com/embed/uRLqnYkpVQc" title="YouTube video player" frameborder="0" ></iframe>
                    </LazyLoadComponent>
                </div>
                <div className='ceo-text-padding1 ceo-content-width flex flex-col md:justify-center'>
                    <h1 className="text-4xl font-bold md:text-start">Founder Speech</h1>
                    <p className="py-6  text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                </div>

            </div>
        </div>
    );
};

export default AboutUs;