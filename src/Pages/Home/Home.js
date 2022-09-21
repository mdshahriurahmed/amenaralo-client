import React, { Suspense } from 'react';
const Banner = React.lazy(() => import("./Banner/Banner"));
const Home = () => {
    return (
        <div className='mt-16 z-0 '>
            <Suspense fallback={<div>Loading...</div>}>
                <Banner />
            </Suspense>

        </div>
    );
};

export default Home;