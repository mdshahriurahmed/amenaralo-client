import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Details from './Details';

const StoryDetails = () => {

    let [loading, setLoading] = useState(true);
    const [story, setStory] = useState([]);
    const { _id } = useParams();

    useEffect(() => {
        const url = `https://amenaralo-server.vercel.app/story/${_id}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setStory(data))
        setLoading(false)
    }, [_id])


    return (
        <div className='mt-12'>
            {loading ? <div className='flex items-center justify-center h-48 mt-48'>
                <Loader></Loader>
            </div> : <div>
                {
                    story ? <Details key={_id}
                        data={story}></Details> : <></>
                }
            </div>
            }
        </div>
    );
};

export default StoryDetails;