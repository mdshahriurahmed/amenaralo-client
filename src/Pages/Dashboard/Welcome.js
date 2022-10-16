import React from 'react';
import wimg from "../../Media/db.png"
import "./Welcome.css"

const Welcome = () => {
    return (
        <div className='flex justify-center items-center w-full h-full'>
            <img src={wimg} alt="" height={500} width={500} className="md:ml-16 floating" />
        </div>
    );
};

export default Welcome;