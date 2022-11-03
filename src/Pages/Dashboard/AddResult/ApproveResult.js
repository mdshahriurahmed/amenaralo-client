import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';
import "./ResultForm.css"
const ApproveResult = () => {
    const navigate = useNavigate();
    const { _id } = useParams();
    const id = _id;
    const { data: result, isLoading } = useQuery('result', () => fetch(`http://localhost:5000/resultdetails/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }

    const approve = () => {
        fetch(`http://localhost:5000/approved/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.status === 404) {
                    toast.error('Failed to approve the result');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate("/dashboard/resul-request")
                    toast.success('Promoted Successfully');
                }
            })

    }
    return (
        <div className='w-full'>
            {
                result ? <div className='py-16 w-full shadow-lg border border-accent rounded-md px-8 flex flex-col-reverse md:flex-row'>

                    <div className='width-c-form1 md:px-5'>
                        <h1 className='text-3xl font-bold'>{result?.exam}</h1>
                        <h2 className='text-sm font-semibold'>{result?.yr} / Marks</h2>
                        <div className='flex flex-col md:flex-row text-start md:mt-8 mt-4'>
                            <div className='md:w-2/4 w-full md:px-2'>

                                {
                                    result?.Bangla ? <>
                                        <p className='py-3 border-b'>
                                            Bangla: {result?.Bangla}
                                        </p>
                                    </> : <></>
                                }



                                {
                                    result?.Mathematics ? <>
                                        <p className='py-3 border-b'>
                                            Bangla: {result?.Mathematics}
                                        </p>
                                    </> : <></>
                                }


                                {
                                    result?.bgs ? <>
                                        <p className='py-3 border-b'>
                                            Bangladesh and Global Studies: {result?.bgs}
                                        </p>
                                    </> : <></>
                                }

                            </div>
                            <div className='md:w-2/4 w-full md:px-2'>

                                {
                                    result?.English ? <>
                                        <p className='py-3 border-b'>
                                            English: {result?.English}
                                        </p>
                                    </> : <></>
                                }


                                {
                                    result?.gs ? <>
                                        <p className='py-3 border-b'>
                                            General Science: {result?.gs}
                                        </p>
                                    </> : <></>
                                }


                                {
                                    result?.rgs ? <>
                                        <p className='py-3 border-b'>
                                            Religious Studies: {result?.rgs}
                                        </p>
                                    </> : <></>
                                }

                            </div>
                        </div>
                        <div className='mt-3 flex flex-row justify-start'>
                            <button className=' hover:bg-primary bg-base-100 border border-primary px-3 rounded rounded-lg hover:text-base-100 text-xs text-primary mr-3 py-1 font-semibold'>DECLINE</button>
                            <button onClick={approve} className=' bg-primary hover:bg-base-100 hover:border hover:border-primary px-3 rounded rounded-lg text-base-100 text-xs hover:text-primary py-1 font-semibold'> APPROVE</button>
                        </div>

                    </div>
                    <div className='width-c-form2'>
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={result?.img} alt="" />

                            </div>

                        </div>
                        <h1 className='mt-1 font-bold text-primary text-xl'>{result?.name}</h1>

                        <p className='mt-1 text-sm font-semibold text-secondary '>{result?.clstitle}  |   ID: {result?.s_id}</p>
                        <button className="btn btn-xs btn-primary mt-2 px-3">View Marksheet</button>
                        <p className='mt-3 text-xs font-semibold text-base-300 '>Added By: {result?.addedby}</p>
                    </div>
                </div>
                    :
                    <></>
            }
        </div>
    );
};

export default ApproveResult;