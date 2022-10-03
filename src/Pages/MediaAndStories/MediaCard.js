import React from 'react';
import "./MediaCard.css"
import c1 from "../../Media/c4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const MediaCard = (props) => {
    const navigate = useNavigate();
    const { _id, img, s_title, p_date } = props.single_media
    return (
        <div className='media_card_main  shadow-lg '>
            <img src={img} alt="" type="image/webp" width={300} height={200} />
            <div className='card_content'>
                <p className='text-accent text-start font-regular text-sm mb-1'>Post Date: <span className='text-primary'>{p_date}</span></p>
                <h3 className='text-justify font-bold '>{s_title
                }</h3>
            </div>
            <div className='card_button text-end font-medium text-primary'>
                <button onClick={() => navigate(`/${props.r_address}/${_id}`)}>Explore More <span>  <FontAwesomeIcon className=' mt-1' icon={faCircleChevronRight} /></span></button>
            </div>
        </div>

    );
};

export default MediaCard;