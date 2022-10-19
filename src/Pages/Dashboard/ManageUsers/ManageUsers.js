import React from 'react';
import "./ManagerUser.css"
import adduser from "../../../Media/adduser.png"
import removeuser from "../../../Media/removeuser.png"
import viewuser from "../../../Media/viewuser.png"
import promoteuser from "../../../Media/promoteuser.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersViewfinder, faUserPlus, faUserXmark, faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const ManageUsers = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full card-grid  '>
            <div className='card-user shadow-lg border border-accent rounded rounded-lg flex flex-row'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button onClick={() => navigate('/dashboard/manage-users/view-users')} className='md:text-2xl text-xl text-base-300 font-bold text-start'><span> <FontAwesomeIcon icon={faUsersViewfinder} /></span> View Users</button>
                </div>
                <div className='w-2/4'>
                    <LazyLoadImage src={viewuser} >

                    </LazyLoadImage>
                </div>
            </div>
            <div className='card-user shadow-lg border border-accent rounded rounded-lg flex flex-row'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button onClick={() => navigate('/dashboard/manage-users/promote-users')} className='md:text-2xl text-xl text-base-300 font-bold' text-start><span> <FontAwesomeIcon icon={faArrowUpRightDots} /></span> Promote Users</button>
                </div>
                <div className='w-2/4'><LazyLoadImage src={promoteuser} >

                </LazyLoadImage></div>
            </div>
            <div className='card-user shadow-lg border border-accent rounded rounded-lg flex flex-row'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button className='md:text-2xl text-xl text-base-300 font-bold text-start'><span> <FontAwesomeIcon icon={faUserPlus} /></span> Add Users</button>
                </div>
                <div className='w-2/4'><LazyLoadImage src={adduser} >
                </LazyLoadImage>
                </div>
            </div>
            <div className='card-user shadow-lg border border-accent rounded rounded-lg flex flex-row'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button onClick={() => navigate('/dashboard/manage-users/remove-user')} className='md:text-2xl text-xl text-base-300 font-bold text-start'><span> <FontAwesomeIcon icon={faUserXmark} /></span> Remove Users</button>
                </div>
                <div className='w-2/4'><LazyLoadImage src={removeuser} >

                </LazyLoadImage></div>
            </div>
        </div>
    );
};

export default ManageUsers;