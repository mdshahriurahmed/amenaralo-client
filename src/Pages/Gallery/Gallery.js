import React from 'react';
import "./Gallery.css"
import "../CommonCSS/CommonStyle.css"
import gall from "../../Media/children-day-16549327424x3.jpg"
import gall1 from "../../Media/c1.jpg"
import gall2 from "../../Media/c2.jpg"
import gall3 from "../../Media/c3.jpg"
import gall4 from "../../Media/c4.jpg"
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';


const Gallery = () => {
    return (
        <div className='mt-8 md:mt-20   md:px-16 px-6'>
            <h1 className='common_head  mb-4'>Gallery </h1>

            <div className='gallery_grid'>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall1} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall2} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall3} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall4} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall2} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall4} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>
                <div className='h-56 w-72  gl m-6 shadow-lg'>
                    <img src={gall1} alt="" className='h-48 w-full ' />
                    <div className='h-8 bg-secondary flex items-center justify-between px-3'>
                        <div><p className='text-start'>Lorem text example</p></div>
                        {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                        <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                    </div>
                </div>


            </div>
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free! You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free! You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free!You've been selected for a chance to get one year of subscription to use Wikipedia for free! </p>
                </div>
            </div>

        </div>
    );
};

export default Gallery;