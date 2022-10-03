import React, { useRef } from 'react';
import "./Contact.css"
import "../CommonCSS/CommonStyle.css"
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import address from "../../Media/address.png"
import ctc from '../../Media/ctct.png'
import em from '../../Media/EM.png'
import GoToTop from "../GoToTop/GoToTop"
import { Helmet } from 'react-helmet-async';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import contact_side from "../../Media/contact_side.png"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_frkmukn', 'template_cbbuqxu', e.target, 'kG3SkCCGQdyrhfgCQ').then(res => {
            toast.success("Message sent successfully!!")


        }).catch(err => toast.error("Failed to sent message"));
        e.target.reset();
    };


    return (
        <div className='mt-16 mb-32'>
            {/*------SEO content------ */}
            <Helmet>
                <title>Contact Amenar Alo Foundation</title>
                <meta name='description' content='Contact information of Amenar Alo Foundation'></meta>
                <link rel="canonical" href="/contact" />
            </Helmet>

            {/* contact page Banner */}

            <div className=' banner-content-contact w-full banner-content-all'>
                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>Contact</b> </h1>
                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?

                    </p>
                </div>

            </div>


            <div className='md:py-28 py-10 md:px-28 px-8 '>
                <h1 className='md:text-3xl font-bold  text-2xl head_c md:mb-12'> <i>IF YOU ARE INTERESTED TO DONATE OR IF YOU NEED ANY INFORMATION KINDLY REACH OUT THROUGH THE FOLLOWING CONTACT INFORMATION </i> </h1>
                <div className='flex_contact_info '>
                    <div className='contact_card rounded-tr-3xl rounded-bl-3xl ' >
                        <div className='flex-img'>
                            <img src={address} alt="" width={70} height={70} />

                        </div>
                        <h5 className='c_title'>ADDRESS</h5>
                        <p className='c_text'> Central Road, Dhaka (BD)
                        </p>
                    </div>
                    <div className='contact_card rounded-tr-3xl rounded-bl-3xl ' >
                        <div className='flex-img '>
                            <img src={ctc} alt="" width={70} height={70} />

                        </div>
                        <h5 className='c_title'>CONTACT</h5>
                        <p className='c_text'>
                            +880 1711520429 (BD)</p>
                    </div>
                    <div className='contact_card rounded-tr-3xl rounded-bl-3xl ' >
                        <div className='flex-img '>
                            <img src={em} alt="" width={70} height={70} />

                        </div>
                        <h5 className='c_title'>EMAIL</h5>
                        <p className='c_text'>info@avixpharma.com
                        </p>
                    </div>


                </div>
            </div>



            <div className="c_form bg-base-200 w-full md:px-28 px-12 py-20">
                <LazyLoadComponent>
                    <div className='cform cform_width dflex justify-center ct-img'>
                        <img src={contact_side} alt="" />
                    </div>
                </LazyLoadComponent>

                <div className="cform_width">

                    <form ref={form} onSubmit={sendEmail} className='flexible_form'>

                        <input type="text" name="user_name" placeholder="Name" className="input_c_width text-primary input-fields" required />


                        <input type="text" name="email" placeholder="Email" className="input_c_width text-primary input-fields" required />
                        <input type="text" name="subject" placeholder="Subject" className="input_c_width text-primary input-fields" required />

                        <textarea className="input_c_width text-primary t_area" name="message" placeholder="Write Message" required></textarea>

                        <button className="input_btn bg-primary">Send Message</button>

                    </form>

                </div>
            </div>

            {/* accordion */}
            <div className='md:px-16 px-6 mt-6 md:mt-28'>
                <h1 className='common_head mb-2'>QUICK FAQS</h1>
                <p className='mb-8'>Before getting in touch, please check to see if your enquiry is covered below</p>
                <div className='c_form'>
                    <div className="cform_width px-2">
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary border-b border-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-primary text-xl font-bold text-start">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary text-justify">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ipsum. Eius mollitia praesentium quia possimus!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary border-b border-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-primary text-xl font-bold text-start">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary text-justify">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ipsum. Eius mollitia praesentium quia possimus!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary border-b border-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-primary text-xl font-bold text-start">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary text-justify">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ipsum. Eius mollitia praesentium quia possimus!</p>
                            </div>
                        </div>
                    </div>
                    <div className="cform_width px-2">
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary border-b border-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-primary text-xl font-bold text-start">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary text-justify">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ipsum. Eius mollitia praesentium quia possimus!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title bg-primary border-b border-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-primary text-xl font-bold text-start">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary text-justify">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ipsum. Eius mollitia praesentium quia possimus!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="checkbox" className="peer" />
                            <div className="collapse-title border-b border-base-100 bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-primary text-xl font-bold text-start">
                                Click me to show/hide content
                            </div>
                            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-base-200 peer-checked:text-secondary text-justify">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, ipsum. Eius mollitia praesentium quia possimus!</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <GoToTop></GoToTop>
        </div>
    );
};

export default Contact;