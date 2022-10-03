import React from 'react';
import "./Gallery.css"
import "../CommonCSS/CommonStyle.css"
import gall from "../../Media/children-day-16549327424x3.jpg"
import gall1 from "../../Media/c1.jpg"
import gall2 from "../../Media/c2.jpg"
import gall3 from "../../Media/c3.jpg"
import gall4 from "../../Media/c4.jpg"
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useEffect } from 'react';
import Gmodal from '../GalleryModal/Gmodal';
import Loading from '../Loading/Loading';


const Gallery = () => {

    let [loading, setLoading] = useState(true);
    const [gimage, setGimage] = useState(null);
    const [gallery, setGallery] = useState([]);
    useEffect(() => {
        fetch('https://fast-dawn-11728.herokuapp.com/gallery')
            .then(res => res.json())
            .then(data => setGallery(data))
        setLoading(false)
    }, [])
    return (
        <div className='mt-8 md:mt-20   md:px-16 px-6'>
            <h1 className='common_head  mb-4'>Gallery </h1>


            {
                loading ? <div className='flex items-center justify-center h-48'>
                    <Loading loading={Loading}></Loading>
                </div> :
                    <div className='gallery_grid'>
                        {
                            gallery.map(image => {
                                return (
                                    <div>
                                        <label for="my-modal-3" className='cursor-pointer' onClick={() => setGimage(image)}>
                                            <div className='h-56 w-72  gl m-6 shadow-lg'>
                                                <img src={image.img} type="image/webp" alt="" className='h-48 w-full ' />
                                                <div className='h-8 bg-base-100 flex items-center justify-between px-3'>
                                                    <div><p className='text-start'>Hello</p></div>
                                                    {/* <div > <ViewfinderCircleIcon className='text-end text-primary w-6'></ViewfinderCircleIcon></div> */}
                                                    <label for="my-modal-3" > <ViewfinderCircleIcon className='text-end text-primary w-6 cursor-pointer'></ViewfinderCircleIcon></label>
                                                </div>
                                            </div>
                                        </label>
                                    </div>
                                )
                            })
                        }

                    </div>
            }
            {gimage && <Gmodal
                gimage={gimage}></Gmodal>}


        </div>
    );
};

export default Gallery;