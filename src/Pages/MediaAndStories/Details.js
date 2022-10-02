import React from 'react';
import GoToTop from '../GoToTop/GoToTop';
import "./Details.css"


const Details = (props) => {
    const { img, title, des, p_date } = props.data;

    return (
        <div className='details_main mt-20 ' >
            <div className='details px-10 shadow-lg pb-32'>
                {title ? <h1 className='second_head1 md:text-start mt-12 '>{title}</h1> :
                    <></>
                }
                {
                    img ? <img src={img} alt="" className='w-full md:mt-8' /> : <></>
                }

                {
                    p_date ? <p className='text-secondary font-medium text-start font-regular text-base mb-1 mt-5'>Post Date: <span className='text-primary'>{p_date}</span></p> : <></>
                }
                {
                    des ? <p className='text-justify mt-4'>{des}</p> : <></>
                }

            </div>
            <GoToTop></GoToTop>
        </div>
    );
};

export default Details;