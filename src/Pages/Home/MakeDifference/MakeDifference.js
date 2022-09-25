import React from 'react';
import "./MakeDifference.css"
import "../../CommonCSS/CommonStyle.css"
import { LazyLoadComponent } from 'react-lazy-load-image-component';

const MakeDifference = () => {
    return (
        <div className='mt-8 md:mt-20   md:px-16 px-6'>
            <h1 className='common_head md:mb-8 mb-4'>How we work <br /> to make a difference </h1>
            <div className='mt-5'>
                <div className='flexible-difference'>

                    <div className='difference-text-padding difference-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">Headline</h1>
                        <p className="py-6  text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                    </div>
                    <div className='difference_img_width'>
                        <LazyLoadComponent>
                            <iframe className='w-full  rounded-lg' height="305" src="https://www.youtube.com/embed/uRLqnYkpVQc" title="YouTube video player" frameborder="0" ></iframe>
                        </LazyLoadComponent>
                    </div>
                </div>
                <div className='flexible-difference1 mt-24'>
                    <div className='difference_img_width'>
                        <LazyLoadComponent>
                            <iframe className='w-full  rounded-lg' height="305" src="https://www.youtube.com/embed/uRLqnYkpVQc" title="YouTube video player" frameborder="0" ></iframe>
                        </LazyLoadComponent>
                    </div>
                    <div className='difference-text-padding1 difference-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">Headline</h1>
                        <p className="py-6  text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>


                    </div>

                </div>
            </div>


        </div>
    );
};

export default MakeDifference;