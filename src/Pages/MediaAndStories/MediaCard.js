import React from 'react';
import "./MediaCard.css"
import c1 from "../../Media/c4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

const MediaCard = () => {
    return (
        <div className='media_card_main  shadow-lg '>
            <img src={c1} alt="" width={300} height={200} />
            <div className='card_content'>
                <p className='text-accent text-start font-regular'>Post Date: <span className='text-primary'>1/10/2022</span></p>
                <h3 className='text-justify font-bold '>Children's project visiting in Dinajpur</h3>
            </div>
            <div className='card_button text-end font-medium text-primary'>
                <button >Explore More <span>  <FontAwesomeIcon className=' mt-1' icon={faCircleChevronRight} /></span></button>
            </div>
        </div>

    );
};

export default MediaCard;