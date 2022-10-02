import React from 'react';
import "./MediaAndStories.css"
import "../CommonCSS/CommonStyle.css"
import Media from './Media';
import Gallery from '../Gallery/Gallery';
import GoToTop from '../GoToTop/GoToTop';
import Story from './Story';


const MediaAndStories = () => {
    return (
        <div className='mt-16 mb-32'>
            <div className=' banner-content-media w-full banner-content-all'>
                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>Media &amp; Stories</b> </h1>
                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?

                    </p>
                </div>

            </div>
            <Media></Media>
            <Story></Story>
            <Gallery></Gallery>
            <GoToTop></GoToTop>
        </div>
    );
};

export default MediaAndStories;