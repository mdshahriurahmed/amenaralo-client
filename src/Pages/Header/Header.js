import React, { useState } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import logo from "../../Media/l.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    // ------ Used this to open and close side navbar for mobile view ------------
    const [open, setOpen] = useState(false);
    const [activemenu, setActivemenu] = useState("");
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
    };
    const menuItems = <>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("about")
        }} to='/about'
            className={`${activemenu === "about" ? "bg-primary text-white px-3 rounded" : "bg-base-100"}`}   >
            ABOUT US</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("what_we_do")
        }} to='/what_we_do'
            className={`${activemenu === "what_we_do" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`} >WHAT WE DO</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("ANALYTICS")
        }} to='/analytics'
            className={`${activemenu === "ANALYTICS" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`}>ANALYTICS</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("media")
        }} to='/media_and_stories'
            className={`${activemenu === "media" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`} >MEDIA &amp; STORIES</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`}>CONTACT</Link>
        {
            user ? <Link onClick={() => {
                setOpen(false)
                setActivemenu("dashboard")
            }} to='/dashboard'
                className={`${activemenu === "dashboard" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`} >DASHBOARD</Link> : <></>

        }

        {
            user ?
                <span onClick={() => {
                    setOpen(false)
                    logout()
                }} to='/login' className="ml-5 cursor-pointer">| <span className='ml-5 text-primary'>LOG OUT</span></span> :
                <Link onClick={() => {
                    setOpen(false)
                }} to='/login' className="ml-5 ">| <span className='ml-5 text-primary'>LOGIN</span></Link>
        }

    </>

    const menuItems1 = <>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("about")
        }} to='/about'
            className={`${activemenu === "about" ? "bg-primary text-white  " : "bg-base-100"} md:px-16 px-6 py-1`}   >
            ABOUT US</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("what_we_do")
        }} to='/what_we_do'
            className={`${activemenu === "what_we_do" ? "bg-primary text-white  " : "bg-base-100"} md:px-16 px-6 py-1`} >WHAT WE DO</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("ANALYTICS")
        }} to='/analytics'
            className={`${activemenu === "ANALYTICS" ? "bg-primary text-white " : "bg-base-100"} md:px-16 px-6 py-1`}>ANALYTICS</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("media")
        }} to='/media_and_stories'
            className={`${activemenu === "media" ? "bg-primary text-white " : "bg-base-100"} md:px-16 px-6 py-1`} >MEDIA &amp; STORIES</Link>

        {
            user ? <Link onClick={() => {
                setOpen(false)
                setActivemenu("dashboard")
            }} to='/dashboard'
                className={`${activemenu === "dashboard" ? "bg-primary text-white" : "bg-base-100"} md:px-16 px-6 py-1`} >DASHBOARD</Link> : <></>

        }

        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "bg-primary text-white " : "bg-base-100"} md:px-16 px-6 py-1`}>CONTACT</Link>

        {
            user ?
                <span onClick={() => {
                    setOpen(false)
                    logout()
                }} to='/login' className='md:px-16 px-6 py-1 text-primary'>LOG OUT </span> :
                <Link onClick={() => {
                    setOpen(false)
                }} to='/login' className='md:px-16 px-6 py-1 text-primary'>LOGIN</Link>
        }

    </>

    return (
        <div className='main_nav fixed top-0 w-full'>
            <div className='  md:px-16 px-6 pt-2 pb-2.5 bg-base-100 shadow-lg'>
                <div className='top-nav flex justify-between items-center'>
                    <label htmlFor="my-drawer-2" className='hamberger cursor-pointer'>
                        <FontAwesomeIcon className='w-8 text-primary text-2xl' icon={faBars} />

                    </label>

                    <div className='site-logo '>
                        <Link to="/" onClick={() => {
                            setOpen(false)
                            setActivemenu("/")
                        }}>
                            <img className='w-56' src={logo} alt="site logo" />
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <div className='menu-items '>
                            <ul className='text-end '>
                                {menuItems}
                            </ul>
                        </div>
                        <div className='hamberger cursor-pointer'>
                            <FontAwesomeIcon className='w-8 text-primary text-2xl' onClick={() => setOpen(!open)} icon={faBars} />

                        </div>
                    </div>

                </div>

            </div>
            <div className={`h-screen bg-base-100 shadow-lg w-72  py-6  ${open ? "sidebarOpen" : "sidebarClose"} `} >
                <ul className='text-start flex flex-col'>
                    {menuItems1}
                </ul>
            </div>

        </div>

    );
};

export default Header;