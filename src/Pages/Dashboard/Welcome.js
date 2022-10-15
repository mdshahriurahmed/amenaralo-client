import React from 'react';
import wimg from "../../Media/db.png"
import "./Welcome.css"

const Welcome = () => {
    return (
        <div>
            <img src={wimg} alt="" height={500} width={500} className="md:ml-48 floating" />
        </div>
    );
};

export default Welcome;