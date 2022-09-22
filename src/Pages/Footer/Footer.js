import React from 'react';
import './Footer.css'
import logo from '../../Media/l.png'
import { Link } from 'react-router-dom';
import fb from '../../Media/fb.png'
import linkedin from '../../Media/li.png'
import twitter from "../../Media/twitter.png"
import insta from '../../Media/insta.png'


const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer className='bg-secondary border-t border-primary md:px-16 px-6 pt-6 mt-60'>
            <div className='flexible_footer md:text-start'>
                <div >
                    <img className='w-60 -ml-2' src={logo} alt="" />
                    <h3 className='font-bold text-3xl '>Office</h3>

                    <p >Central Road, Dhaka <br />
                        Mobile: +880 1711520429 (BD)<br />
                        Email: info@amenaralo.com<br />

                    </p>

                </div>
                <div className='common_divs our_foundation '>
                    <h3 className='font-bold text-3xl '>Our Foundation</h3>
                    <Link to='/' >Home</Link> <br />
                    <Link to='/about_us' >ABOUT US</Link> <br />
                    <Link to='/team'>WHAT WE DO</Link> <br />
                    <Link to='/Products'>PROGRES ANALYSIS</Link> <br />
                    <Link to='/pipeline'>MEDIA &amp; STORIES</Link> <br />


                </div>

                <div className='common_divs our_foundation policies'>
                    <h3 className='font-bold text-3xl '>Policies</h3>
                    <Link to='/'>Cookie policy
                    </Link> <br />
                    <Link to='/'>Diversity, Equity and <br /> Inclusion policy
                    </Link> <br />
                    <Link to='/'>Privacy policy
                    </Link> <br />
                    <Link to='/'>Compassionate use policy</Link> <br />

                </div>
                <div className='common_divs our_foundation get_in_touch'>
                    <h3 className='font-bold text-3xl '>Get In Touch</h3>
                    <Link to='/career'>Career</Link> <br />
                    <Link to='/contact'>Contact</Link> <br />
                    <a href="https://privateemail.com/" target='_blank' rel='noreferrer'>Web Mail</a> <br />
                    <div className='social_flex_footer'>
                        <a href="https://twitter.com/" target='_blank' rel='noreferrer' ><img className='social_icon_footer' src={twitter} alt="" /></a>
                        <a href="https://www.facebook.com/" target='_blank' rel='noreferrer' ><img className='social_icon_footer' src={fb} alt="" /></a>
                        <a href="https://www.linkedin.com/" target='_blank' rel='noreferrer'><img className='social_icon_footer' src={linkedin} alt="" /></a>
                        <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'><img className='social_icon_footer' src={insta} alt="" /></a>

                    </div>
                </div>
            </div>
            <div >
                <p id='copyright'>© AVIX PHARMACEUTICALS LIMITED {year}</p>
            </div>
        </footer>
    );
};

export default Footer;