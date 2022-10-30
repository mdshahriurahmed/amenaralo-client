import React from 'react';
import { useParams } from 'react-router-dom';

const ResultForm = () => {
    const { _id } = useParams();
    return (
        <div>
            <h1>Hi. the id is {_id}</h1>
        </div>
    );
};

export default ResultForm;