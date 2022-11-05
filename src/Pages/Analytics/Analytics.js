import React from 'react';
import "../WhatWeDoMain/WhatWeDoMain.css"
import "../CommonCSS/CommonStyle.css"
import art from "../../Media/anl.png"
import Gallery from '../Gallery/Gallery';
import GoToTop from '../GoToTop/GoToTop';
import { useQuery } from 'react-query';
import Loader from '../Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import "../Dashboard/ManageUsers/Viewuse.css"
import { useNavigate } from 'react-router-dom';


const Analytics = () => {
    const navigate = useNavigate();
    const { data: childrens, isLoading } = useQuery('childrens', () => fetch(`http://localhost:5000/allchildren`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }
    return (
        <div className='mt-16 mb-32'>
            <div className=' banner-content-we w-full banner-content-all'>
                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>Analytics</b> </h1>
                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?

                    </p>
                </div>
            </div>
            <div className='mt-8 md:mt-28  md:px-16 px-6'>
                <div className='flexible-prob'>
                    <div className='prob_img_width'>
                        <img src="https://i.ibb.co/4pphvSL/children-day-16549327424x3.jpg" alt="education_image" className=' w-full rounded-lg' />
                    </div>
                    <div className='prob-text-padding prob-content-width flex flex-col md:justify-center'>
                        <h1 className="text-4xl font-bold md:text-start">Headlone</h1>
                        <p className="py-6 md:text-start">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        <div> <button className="btn btn-sm rounded:sm btn-primary md:flex md:justify-start">Get Started</button></div>
                    </div>
                </div>
            </div>
            <div className='art-bg mt-8 lg:mt-24 md:mt-16 w-full'>
                <div className='  md:px-16 px-6 pb-10'>

                    <div className='flex_problem'>
                        <div className='p_width1'>
                            <img src={art} alt="" width={300} />
                        </div>
                        <div className='p_width2'>
                            <h1 className='common_head  mb-4 md:mb-8'>View Our Student Progress</h1>
                            <div className='p-5  rounded rounded-lg '>
                                <table className="table w-full border border-base-100 border-2 z-0">

                                    <thead>
                                        <tr>

                                            <th>Name</th>

                                            <th className='s-code'>Class</th>
                                            <th>Analytics</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            childrens?.map((children, index) => {
                                                const id = children._id;
                                                return (
                                                    <tr>

                                                        <td>
                                                            <div className="flex items-center space-x-3 ">
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={children?.img} alt="Upload Please" />
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-bold">{children?.name}</div>
                                                                    <div className="text-sm opacity-50">ID: {children.s_id}</div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className='s-code'>
                                                            {children?.cclass}
                                                        </td>
                                                        <th>
                                                            <button onClick={() => { navigate(`/analytics-view/${id}`) }} className="btn btn-accent btn-xs detail-btn-u">view</button>
                                                            <FontAwesomeIcon className="text-accent eye-icon" icon={faEye} />
                                                        </th>

                                                    </tr>
                                                )
                                            })

                                        }



                                    </tbody>

                                    <tfoot>
                                        <tr>

                                            <th>Name</th>

                                            <th className='s-code'>Class</th>
                                            <th>Analytics</th>

                                        </tr>
                                    </tfoot>

                                </table>
                            </div>
                        </div>
                    </div>

                </div>


            </div>


            <Gallery></Gallery>
            <GoToTop></GoToTop>
        </div>
    );
};

export default Analytics;