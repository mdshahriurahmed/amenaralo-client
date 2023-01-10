import React from 'react';
import MediaCard from './MediaCard';
import Loader from "../Loader/Loader"
import "./Media.css"
import { useQuery } from 'react-query';

const Story = () => {

    const r_address = 'story_details'

    const { data: story, isLoading } = useQuery('story', () => fetch(`https://amenaralo-server.vercel.app/story`, {
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
            <h1 className='common_head mt-6 md:mt-12 mb-4 md:mb-8'> Stories </h1>
            <div>
                {

                    <div className='media_grid'>
                        {
                            story?.map(single_media => {
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