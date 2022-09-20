import React, { useState } from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import logo from "../../Media/l.png"

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

    return (
        <div className='main_nav  px-16 pt-3 pb-4 bg-secondary shadow-lg'>
            <div className='top-nav flex justify-between items-center'>
                <div className='site-logo '>
                    <Link to="/" onClick={() => setOpen(false)}>
                        <img className='w-60' src={logo} alt="site logo" />
                    </Link>
                </div>
                <div className='menu-items '>
                    <ul className='text-end '>
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;