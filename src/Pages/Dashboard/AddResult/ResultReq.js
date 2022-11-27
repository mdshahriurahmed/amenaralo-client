import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import "../ManageChildrens/ViewChildren.css"
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const ResultReq = () => {
    const navigate = useNavigate();
    const { data: requests, isLoading } = useQuery('requests', () => fetch(`https://amenaralo.up.railway.app/resultrequests`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loader></Loader>
    }

    return (
        <div className='w-full shadow-lg'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Name</th>
                            <th className='s-code'>Class</th>
                            <th className='responsivetable'>Status</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            requests?.map((children, index) => {
                                const _id = children?._id;

                                return (


                                    children.status === "pending" ?
                                        <tr>
                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={children?.img} alt="Upload Please" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{children?.name}</div>
                                                        <div className="text-sm opacity-50">ID: {children.s_id}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className='s-code'>
                                                {children?.clstitle}
                                            </td>
                                            <td className='responsivetable'>
                                                {children?.viewed}
                                            </td>
                                            <th>
                                                <button onClick={() => { navigate(`/dashboard/approve-result/${_id}`) }} className="btn btn-primary btn-xs detail-btn-u">View</button>
                                                <FontAwesomeIcon onClick={() => { navigate(`/dashboard/approve-result/${_id}`) }} className="text-primary eye-icon" icon={faNoteSticky} />
                                            </th>

                                        </tr> :
                                        <></>


                                )
                            })

                        }



                    </tbody>

                    <tfoot>
                        <tr>

                            <th>Name</th>
                            <th className='s-code'>Class</th>
                            <th className='responsivetable'>Status</th>
                            <th>Action</th>

                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ResultReq;