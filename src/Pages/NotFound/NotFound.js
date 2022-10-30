import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import nf from "../../Media/nfound.png"
const NotFound = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <LazyLoadImage
                alt="not found page"
                height={500}
                src={nf} // use normal <img> attributes as props
                width={400} />
        </div>
    );
};

export default NotFound;