import React, { Suspense } from 'react';
const Banner = React.lazy(() => import("./Banner/Banner"));
const WhatWeDo = React.lazy(() => import('./WhatWeDo/WhatWeDo'));
const Home = () => {
    return (
        <div className='mt-16 z-0 '>
            {/* ---------Slider starts from here --------*/}
            <Suspense fallback={<div>Loading...</div>}>
                <Banner />
            </Suspense>
            {/* ---------Slider end here --------*/}

            {/* ---------What We Do Section starts from here --------*/}
            <Suspense fallback={<div>Loading...</div>}>
                <WhatWeDo></WhatWeDo>
            </Suspense>
            {/* ---------What We Do Section end here --------*/}

        </div>
    );
};

export default Home;