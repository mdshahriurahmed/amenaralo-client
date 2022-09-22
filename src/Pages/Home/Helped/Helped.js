import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import "./Helped.css"

const Helped = () => {
    return (
        <div className='md:px-16 px-6 mt-8 md:mt-20'>
            <div className='flex flex-col md:flex-row justify-center items-center lg:gap-16 md:gap-8 w-full'>
                <div className='helped_card shadow-lg'>

                    <FontAwesomeIcon className=' text-5xl  text-primary mb-2' icon={faHandshakeAngle} />
                    <h3 >We’ve helped</h3>
                    <p><i>20 children across the world get the medicine, good food and education they need</i></p>
                </div>
                <div className='helped_card shadow-lg'>

                    <FontAwesomeIcon className=' text-5xl  text-primary mb-2' icon={faPeopleGroup} />
                    <h3 >We are</h3>
                    <p><i>Over 100 supporters, alongside families, teachers and other workers</i></p>
                </div>
            </div>

        </div>
    );
};

export default Helped;