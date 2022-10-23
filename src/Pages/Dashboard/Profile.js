import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import "./Profile.css"
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Profile = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    console.log(user);
    return (
        <div className='pb-10 w-full'>
            <div className='flex md:flex-row flex-col justify-center items-center md:items-start'>
                <div className='h-56 md:w-56 w-full shadow-lg border border-accent md:mr-8 rounded-md mb-6 p-8 flex flex-col justify-center items-center'>
                    <div className="avatar">
                        <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/cDv93s1/Md-Shahriur.png" />
                        </div>
                    </div>
                    <button className="mt-3 bg-primary px-3 rounded-xl font-base  text-base-200 hover:bg-base-100 hover:border hover:border-primary hover:text-primary">Update  <span><FontAwesomeIcon icon={faPenToSquare} /></span> </button>
                </div>
                <div className='py-16 w-full shadow-lg border border-accent rounded-md px-8 '>

                    <div className=' lg:pt-4 flex_profile'>
                        <div className='flex flex-col items-start profile '>
                            {/* ----code for name -----*/}
                            <div className=' bg-base-100 text-primary z-10 ml-4 px-1'>Name</div>
                            <div className='text-lg border border-base-300  border rounded-lg -mt-3 z-0 py-2 px-5 w-full w-full text-start font-base text-base-300'>Md Shahriur Ahmed</div>
                            {/* ----code for Email -----*/}
                            <div className=' bg-base-100 text-primary z-10 ml-4 px-1 mt-4'>Email</div>
                            <div className='text-lg border border-base-300  border rounded-lg -mt-3 z-0 py-2 px-5 w-full w-full text-start font-base text-base-300'>shahriurahmed914@gmail.com</div>
                            {/* ----code for Phone -----*/}
                            <div className=' bg-base-100 text-primary z-10 ml-4 px-1 mt-4'>Phone</div>
                            <div className='text-lg border border-base-300  border rounded-lg -mt-3 z-0 py-2 px-5 w-full w-full text-start font-base text-base-300'>01771046952</div>
                            <button className="mt-6 mb-6 bg-primary px-7 rounded-lg font-base text-lg  text-base-200 hover:bg-base-100 hover:border hover:border-primary hover:text-primary py-1 ">Update  <span className='ml-1'><FontAwesomeIcon icon={faPenToSquare} /></span> </button>
                        </div>
                        <div className='profile lg:ml-4' >
                            <p className='text-base-300 text-justify mt-2 '> <b> Update your password through the button below </b> You will be redirected to a new page and must follow the instructions.</p>
                            <button onClick={() => navigate("/dashboard/change-password")} className="mt-6 mb-6 hover:bg-primary px-7 rounded-lg font-base text-lg  hover:text-base-200 bg-base-100 border border-primary text-primary py-1 hover:border-none w-full">Change Password  <span className='ml-1'><FontAwesomeIcon icon={faPenToSquare} /></span> </button>
                            <p className='text-base-300 text-justify mt-2 '> <b> Update your Email through the button below </b> You will be redirected to a new page and must follow the instructions.</p>
                            <button onClick={() => navigate("/dashboard/change-email")} className="mt-6 mb-6 hover:bg-primary px-7 rounded-lg font-base text-lg  hover:text-base-200 bg-base-100 border border-primary text-primary py-1 hover:border-none w-full">Change Email  <span className='ml-1'><FontAwesomeIcon icon={faPenToSquare} /></span> </button>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;