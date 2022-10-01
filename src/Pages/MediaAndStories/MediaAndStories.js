import React from 'react';
import "./MediaAndStories.css"
import "../CommonCSS/CommonStyle.css"
import MediaCard from './MediaCard';

const MediaAndStories = () => {
    return (
        <div className='mt-12'>
            <div className=' banner-content-media w-full banner-content-all'>
                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>Media &amp; Stories</b> </h1>
                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?

                    </p>
                </div>

            </div>

            <div className='md:px-16 px-6'>
                <h1 className='common_head mt-6 md:mt-12 mb-4 md:mb-8'> Media </h1>
                <div>
                    <MediaCard></MediaCard>

                </div>
            </div>
        </div>
    );
};

export default MediaAndStories;