import React from 'react';
import "./ManageChildrens.css"
import adduser from "../../../Media/adduser.png"
import removeuser from "../../../Media/removeuser.png"
import viewchild from "../../../Media/viewchild.png"
import promoteuser from "../../../Media/promoteuser.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsersViewfinder, faPuzzlePiece, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const ManageChildrens = () => {
    const navigate = useNavigate();
    return (
        <div className='w-full card-gridch  '>
            <div onClick={() => navigate('/dashboard/manage-childrens/view-childrens')} className='card-userch shadow-lg border border-accent rounded rounded-lg flex flex-row cursor-pointer'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button className='btn-text-cldrn text-base-300 font-bold text-start'><span> <FontAwesomeIcon className='spicon' icon={faUsersViewfinder} /> <br className='breaks' /> </span> View Childrens</button>
                </div>
                <div className='w-2/4'>
                    <LazyLoadImage src={viewchild} >

                    </LazyLoadImage>
                </div>
            </div>
            <div onClick={() => navigate('/dashboard/manage-users/promote-users')} className='card-userch shadow-lg border border-accent rounded rounded-lg flex flex-row cursor-pointer'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button className='btn-text-cldrn text-base-300 font-bold' text-start><span> <FontAwesomeIcon className='spicon' icon={faPenToSquare} /><br className='breaks' /></span> Update Info</button>
                </div>
                <div className='w-2/4'><LazyLoadImage src={promoteuser} >

                </LazyLoadImage></div>
            </div>
            <div onClick={() => navigate('/dashboard/manage-childrens/add-children')} className='card-userch shadow-lg border border-accent rounded rounded-lg flex flex-row cursor-pointer'>
                <div className='w-2/4 flex justify-start items-start ml-1'>
                    <button className='btn-text-cldrn text-base-300 font-bold text-start'><span> <FontAwesomeIcon className='spicon' icon={faPuzzlePiece} /><br className='breaks' /></span> Add Childrens</button>
                </div>
                <div className='w-2/4'><LazyLoadImage src={adduser} >
                </LazyLoadImage>
                </div>
            </div>
            <div onClick={() => navigate('/dashboard/manage-childrens/remove-children')} className='card-userch shadow-lg border border-accent rounded rounded-lg flex flex-row cursor-pointer'>
                <div className='w-2/4  flex justify-start items-start ml-1 '>
                    <button className='btn-text-cldrn text-base-300 font-bold text-start'><span> <FontAwesomeIcon className='spicon' icon={faTrashCan} /><br className='breaks' /></span> Remove Childrens</button>
                </div>
                <div className='w-2/4'><LazyLoadImage src={removeuser} >

                </LazyLoadImage></div>
            </div>
        </div>
    );
};

export default ManageChildrens;