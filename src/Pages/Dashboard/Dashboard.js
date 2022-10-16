import { faCircleUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Dashboard.css"
import useBreadcrumbs from "use-react-router-breadcrumbs";


const Dashboard = () => {
    const [user] = useAuthState(auth);
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className='mt-20 dashboard '>
            {
                user ?
                    <div className="drawer drawer-mobile ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-start justify-start bg-base-100 d-content md:px-12 md:py40 px-5 py-9">
                            <div className="text-sm breadcrumbs">
                                <ul>
                                    <React.Fragment>
                                        {breadcrumbs.map(({ match,
                                            breadcrumb }) => <li>
                                                <a>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                                    <span key={match.pathname}>
                                                        <NavLink to={match.pathname}>{breadcrumb}</NavLink>
                                                    </span>
                                                </a>
                                            </li>)}
                                    </React.Fragment>



                                </ul>
                            </div>

                            <Outlet></Outlet>
                        </div>
                        <div className="drawer-side d-drawer min-h-screen ">
                            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                            <ul className="menu p-4 overflow-y-auto w-72 bg-primary  text-base-content d-menu">
                                <div className='h-16 flex flex-row items-center border-b-2 mb-3'>
                                    <div className="avatar online">
                                        <div className="w-12 rounded-full">
                                            <img src="https://i.ibb.co/cDv93s1/Md-Shahriur.png" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className='ml-4  text-start user_name text-white'>Md Shahriur Ahmed</h1>
                                        <p className='text-start  ml-4 user-title'>Admin</p>

                                    </div>
                                </div>

                                <li><Link to="/dashboard/profile" className='text-start text-xl text-base-100 '><span> <FontAwesomeIcon icon={faCircleUser} /></span> Profile</Link></li>
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