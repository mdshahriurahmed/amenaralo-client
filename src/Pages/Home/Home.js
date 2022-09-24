import React, { Suspense } from 'react';
import Loader from '../Loader/Loader';
const Banner = React.lazy(() => import("./Banner/Banner"));
const WhatWeDo = React.lazy(() => import('./WhatWeDo/WhatWeDo'));
const Helped = React.lazy(() => import('./Helped/Helped'));
const MakeDifference = React.lazy(() => import('./MakeDifference/MakeDifference'));
const Gallery = React.lazy(() => import('../Gallery/Gallery'));

const Home = () => {
    return (
        <div className='mt-16 z-0 '>
            {/* ---------Slider starts from here --------*/}
            <Suspense fallback={<div><Loader></Loader></div>}>
                <Banner />
            </Suspense>
            {/* ---------Slider end here --------*/}

            {/* ---------What We Do Section starts from here --------*/}
            <Suspense fallback={<div><Loader></Loader></div>}>
                <WhatWeDo></WhatWeDo>
            </Suspense>
            {/* ---------What We Do Section end here --------*/}
            {/* ---------We helped and we are Section starts from here --------*/}
            <Suspense fallback={<div><Loader></Loader></div>}>
                <Helped></Helped>
            </Suspense>
            {/* ---------We helped and we are Section end here --------*/}

            {/* ---------How we work to make a difference Section starts from here --------*/}
            <Suspense fallback={<div><Loader></Loader></div>}>
                <MakeDifference></MakeDifference>
            </Suspense>
            {/* ---------How we work to make a difference Section end here --------*/}
            {/* ---------How we work to make a difference Section starts from here --------*/}
            <Suspense fallback={<div><Loader></Loader></div>}>
                <Gallery></Gallery>
            </Suspense>
            {/* ---------How we work to make a difference Section end here --------*/}

        </div>
    );
};

export default Home;