import { faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Dashboard.css"


const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='mt-20 dashboard '>
            {
                user ?
                    <div className="drawer drawer-mobile ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center bg-base-100 d-content">
                            <Outlet></Outlet>


                        </div>
                        <div className="drawer-side d-drawer min-h-screen ">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                            <ul className="menu p-4 overflow-y-auto w-72 bg-primary  text-base-content d-menu">
                                <div className='h-16 flex flex-row items-center border-b-2 mb-3'>
                                    <div className="avatar online">
                                        <div className="w-12 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='ml-4  text-start user_name text-white'>Md Shahriur Ahmed</h1>
                                        <p className='text-start text-base-300 ml-4'>Admin</p>
                                    </div>
                                </div>
                                <li><Link to="/dashboard" className='text-start text-xl text-base-100 '><span> <FontAwesomeIcon icon={faCircleUser} /></span> Profile</Link></li>
                                <li><Link to="/dashboard" className='text-start text-xl text-base-100 '><span> <FontAwesomeIcon icon={faUserPlus} /></span> Manage Users</Link></li>
                                <li><Link to="/dashboard" className='text-start text-xl text-base-100 '><span> <FontAwesomeIcon icon={faCircleUser} /></span> Manage Childrens</Link></li>
                                <li><Link to="/dashboard" className='text-start text-xl text-base-100 '><span> <FontAwesomeIcon icon={faCircleUser} /></span> Profile</Link></li>



                            </ul>

                        </div>
                    </div>
                    :
                    <></>
            }
        </div>
    );
};

export default Dashboard;