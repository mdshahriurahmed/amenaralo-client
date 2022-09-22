import React from 'react';
import { BarLoader } from 'react-spinners';


const Loading = (props) => {

    return (
        <div className='flex justify-center'>
            {props.loading ? <BarLoader color={"#ff6600"}
                loading={props.loading}
                size={35}
                speedMultiplier={2} /> : <></>}
        </div>
    );
};

export default Loading;