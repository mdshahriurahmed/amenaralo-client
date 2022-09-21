import React, { useState } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import logo from "../../Media/l.png"
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    // ------ Used this to open and close side navbar for mobile view ------------
    const [open, setOpen] = useState(false);
    const [activemenu, setActivemenu] = useState("");

    const menuItems = <>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("about")
        }} to='/about_us'
            className={`${activemenu === "about" ? "bg-primary text-white px-3 rounded" : "bg-secondary"}`}   >
            ABOUT US</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("what_we_do")
        }} to='/team'
            className={`${activemenu === "what_we_do" ? "bg-primary text-white px-3 rounded" : "bg-secondary"} ml-5`} >WHAT WE DO</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("progress")
        }} to='/pipeline'
            className={`${activemenu === "progress" ? "bg-primary text-white px-3 rounded" : "bg-secondary"} ml-5`}>PROGRES ANALYSIS</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("media")
        }} to='/career'
            className={`${activemenu === "media" ? "bg-primary text-white px-3 rounded" : "bg-secondary"} ml-5`} >MEDIA &amp; STORIES</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "bg-primary text-white px-3 rounded" : "bg-secondary"} ml-5`}>CONTACT</Link>
        <Link onClick={() => {
            setOpen(false)
        }} to='/contact' className="ml-5 ">| <span className='ml-5 text-primary'>LOGIN</span></Link>

    </>

    const menuItems1 = <>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("about")
        }} to='/about_us'
            className={`${activemenu === "about" ? "bg-primary text-white  " : "bg-secondary"} md:px-16 px-6 py-1`}   >
            ABOUT US</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("what_we_do")
        }} to='/team'
            className={`${activemenu === "what_we_do" ? "bg-primary text-white  " : "bg-secondary"} md:px-16 px-6 py-1`} >WHAT WE DO</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("progress")
        }} to='/pipeline'
            className={`${activemenu === "progress" ? "bg-primary text-white " : "bg-secondary"} md:px-16 px-6 py-1`}>PROGRES ANALYSIS</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("media")
        }} to='/career'
            className={`${activemenu === "media" ? "bg-primary text-white " : "bg-secondary"} md:px-16 px-6 py-1`} >MEDIA &amp; STORIES</Link>
        <Link onClick={() => {
            setOpen(false)
            setActivemenu("contact")
        }} to='/contact' className={`${activemenu === "contact" ? "bg-primary text-white " : "bg-secondary"} md:px-16 px-6 py-1`}>CONTACT</Link>
        <Link onClick={() => {
            setOpen(false)
        }} to='/contact' className='md:px-16 px-6 py-1 text-primary'>LOGIN</Link>

    </>

    return (
        <div className='main_nav fixed top-0 w-full'>
            <div className='  md:px-16 px-6 pt-3 pb-4 bg-secondary shadow-lg'>
                <div className='top-nav flex justify-between items-center'>
                    <div className='site-logo '>
                        <Link to="/" onClick={() => {
                            setOpen(false)
                            setActivemenu("/")
                        }}>
                            <img className='w-60' src={logo} alt="site logo" />
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <div className='menu-items '>
                            <ul className='text-end '>
                                {menuItems}
                            </ul>
                        </div>
                        <div className='hamberger cursor-pointer'>
                            <Bars3Icon className='w-8 text-primary' onClick={() => setOpen(!open)}></Bars3Icon>
                        </div>
                    </div>

                </div>

            </div>
            <div className={`h-screen shadow-lg w-60  py-6  ${open ? "sidebarOpen" : "sidebarClose"} `} >
                <ul className='text-start flex flex-col'>
                    {menuItems1}
                </ul>
            </div>
        </div>

    );
};

export default Header;