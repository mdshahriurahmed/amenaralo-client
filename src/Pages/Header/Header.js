import React, { useState } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import logo from "../../Media/l.png"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    // ------ Used this to open and close side navbar for mobile view ------------
    const [open, setOpen] = useState(false);
    const [activemenu, setActivemenu] = useState("");

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
            setActivemenu("progress")
        }} to='/pipeline'
            className={`${activemenu === "progress" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`}>PROGRES ANALYSIS</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("media")
        }} to='/media_and_stories'
            className={`${activemenu === "media" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`} >MEDIA &amp; STORIES</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "bg-primary text-white px-3 rounded" : "bg-base-100"} ml-5`}>CONTACT</Link>
        <Link onClick={() => {
            setOpen(false)
        }} to='/contact' className="ml-5 ">| <span className='ml-5 text-primary'>LOGIN</span></Link>

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
            setActivemenu("progress")
        }} to='/pipeline'
            className={`${activemenu === "progress" ? "bg-primary text-white " : "bg-base-100"} md:px-16 px-6 py-1`}>PROGRES ANALYSIS</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("media")
        }} to='/career'
            className={`${activemenu === "media" ? "bg-primary text-white " : "bg-base-100"} md:px-16 px-6 py-1`} >MEDIA &amp; STORIES</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "bg-primary text-white " : "bg-base-100"} md:px-16 px-6 py-1`}>CONTACT</Link>
        <Link onClick={() => {
            setOpen(false)
        }} to='/contact' className='md:px-16 px-6 py-1 text-primary'>LOGIN</Link>

    </>

    return (
        <div className='main_nav fixed top-0 w-full'>
            <div className='  md:px-16 px-6 pt-2 pb-2.5 bg-base-100 shadow-lg'>
                <div className='top-nav flex justify-between items-center'>
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
            <div className={`h-screen bg-base-100 shadow-lg w-60  py-6  ${open ? "sidebarOpen" : "sidebarClose"} `} >
                <ul className='text-start flex flex-col'>
                    {menuItems1}
                </ul>
            </div>
        </div>

    );
};

export default Header;