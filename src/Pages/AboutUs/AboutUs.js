import React from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import "./AboutUs.css"
import bg from "../../Banner/bg.png"
import "../CommonCSS/CommonStyle.css"
import cgoal from '../../Media/ce.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsHoldingChild, faHandHoldingHeart, faPeopleLine } from '@fortawesome/free-solid-svg-icons';
import GoToTop from "../GoToTop/GoToTop"
const AboutUs = () => {

    return (
        <div className='mt-16 mb-32'>
            <div className=' banner-content-about w-full banner-content-all'>
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

            <h1 className='common_head mt-6 md:mt-12 mb-4 md:mb-8'>OUR GOAL</h1>
            <div className='mt-5 md:px-16 px-6'>
                <div className='flexible-goal'>

                    <div className='goal-text-padding goal-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">Headline</h1>
                        <p className="py-6 md:text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                    </div>
                    <div className='goal_img_width'>
                        <img src={cgoal} alt="education_image" className=' w-full rounded-lg' />
                    </div>
                </div>
            </div>

            <div className='w-full h-64 bg-base-200 mt-10 md:mt-20 md:px-16 px-6 py-16 ' >
                <div className='flex justify-center items center h-full'>
                    <div className='flex flex-col justify-center items center w-2/6 h-full'>
                        <FontAwesomeIcon className=' md:text-5xl text-3xl text-primary  mb-2' icon={faHandsHoldingChild} />
                        <p className='md:tracking-widest tracking-normal text-sm md:text-lg font-medium'>20+ children <br /> helped</p>
                    </div>
                    <div className='flex flex-col justify-center items center w-2/6 h-full'>
                        <FontAwesomeIcon className=' md:text-5xl text-3xl text-primary  mb-2' icon={faHandHoldingHeart} />
                        <p className='md:tracking-widest tracking-normal text-sm md:text-lg font-medium'>1+ years of <br /> service </p>
                    </div>
                    <div className='flex flex-col justify-center items center w-2/6 h-full'>
                        <FontAwesomeIcon className=' md:text-5xl text-3xl  text-primary mb-2' icon={faPeopleLine} />
                        <p className='md:tracking-widest tracking-normal text-sm md:text-lg font-medium'>5+ volunteer <br />is helping</p>
                    </div>

                </div>
            </div>
            <GoToTop></GoToTop>
        </div>
    );
};

export default AboutUs;