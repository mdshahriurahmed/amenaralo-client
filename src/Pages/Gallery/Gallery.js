import React from 'react';
import "./Gallery.css"
import "../CommonCSS/CommonStyle.css"
import { ViewfinderCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import Gmodal from '../GalleryModal/Gmodal';
import Loader from '../Loader/Loader';
import { useQuery } from 'react-query';


const Gallery = () => {


    const [gimage, setGimage] = useState(null);
    const { data: gallery, isLoading, refetch } = useQuery('gallery', () => fetch(`http://localhost:5000/gallery`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }


    return (
        <div className='mt-8 md:mt-20   md:px-16 px-6'>
            <h1 className='common_head  mb-4'>Gallery </h1>


            {

                <div className='gallery_grid'>
                    {
                        gallery?.map(image => {
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