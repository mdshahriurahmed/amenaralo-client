import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';
import Loader from "../Loader/Loader"
import "./Media.css"

const Story = () => {

    let [loading, setLoading] = useState(true);
    const [media, setMedia] = useState([]);
    const r_address = 'media_details'
    useEffect(() => {
        fetch('https://fast-dawn-11728.herokuapp.com/media')
            .then(res => res.json())
            .then(data => setMedia(data))
        setLoading(false)
    }, [])
    return (
        <div className='md:px-16 px-6 mb-12'>
            <h1 className='common_head mt-6 md:mt-12 mb-4 md:mb-8'> Stories </h1>
            <div>
                {
                    loading ?
                        <div className='flex items-center justify-center h-48'>
                            <Loader></Loader>
                        </div> :
                        <div className='media_grid'>
                            {
                                media.map(single_media => {
                                    return (
                                        <MediaCard
                                            key={single_media._id}
                                            single_media={single_media}
                                            r_address={r_address}>

                                        </MediaCard>
                                    )
                                })
                            }

                        </div>
                }


            </div>

        </div>
    );
};

export default Story;