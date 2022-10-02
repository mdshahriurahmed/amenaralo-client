import React from 'react';
import Banner from "../Home/Banner/Banner"
import WhatWeDo from "../Home/WhatWeDo/WhatWeDo"
import Helped from "../Home/Helped/Helped"
import MakeDifference from "../Home/MakeDifference/MakeDifference";
import Gallery from "../Gallery/Gallery"
import GoToTop from '../GoToTop/GoToTop';

const Home = () => {
    return (
        <div className='mt-16 z-0  mb-32'>
            {/* ---------Slider starts from here --------*/}

            <Banner></Banner>

            {/* ---------Slider end here --------*/}

            {/* ---------What We Do Section starts from here --------*/}

            <WhatWeDo></WhatWeDo>

            {/* ---------What We Do Section end here --------*/}
            {/* ---------We helped and we are Section starts from here --------*/}

            <Helped></Helped>

            {/* ---------We helped and we are Section end here --------*/}

            {/* ---------How we work to make a difference Section starts from here --------*/}

            <MakeDifference></MakeDifference>

            {/* ---------How we work to make a difference Section end here --------*/}
            {/* ---------How we work to make a difference Section starts from here --------*/}

            <Gallery></Gallery>

            {/* ---------How we work to make a difference Section end here --------*/}
            <GoToTop></GoToTop>
        </div>
    );
};

export default Home;