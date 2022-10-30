import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';

const ResultForm = () => {
    const { _id } = useParams();
    const id = _id;
    const { data: children, isLoading, refetch } = useQuery('children', () => fetch(`http://localhost:5000/children/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div>
            <h1>Hi. the id is {_id}</h1>
            <h2>ch{children?.name}</h2>
        </div>
    );
};

export default ResultForm;