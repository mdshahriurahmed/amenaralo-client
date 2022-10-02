import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Details from './Details';

const MediaDetails = () => {

    let [loading, setLoading] = useState(true);
    const [media, setMedia] = useState([]);
    const { _id } = useParams();

    useEffect(() => {
        const url = `https://fast-dawn-11728.herokuapp.com/media/${_id}`;
        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setMedia(data))
        setLoading(false)
    }, [_id])


    return (
        <div className='mt-12'>
            {loading ? <div className='flex items-center justify-center h-48 mt-48'>
                <Loader></Loader>
            </div> : <div>
                {
                    media ? <Details key={_id}
                        data={media}></Details> : <></>
                }
            </div>
            }
        </div>
    );
};

export default MediaDetails;