import React from 'react';
import MediaCard from './MediaCard';
import Loader from "../Loader/Loader"
import "./Media.css"
import { useQuery } from 'react-query';

const Media = () => {

    const r_address = 'media_details'
    const { data: media, isLoading } = useQuery('media', () => fetch(`https://amenaralo-server.vercel.app/media`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='md:px-16 px-6 mb-12'>
            <h1 className='common_head mt-6 md:mt-12 mb-4 md:mb-8'> Media </h1>
            <div>
                {

                    <div className='media_grid'>
                        {
                            media?.map(single_media => {
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

export default Media;