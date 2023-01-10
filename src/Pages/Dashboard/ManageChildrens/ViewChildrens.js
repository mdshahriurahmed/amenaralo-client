import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import "./ViewChildren.css"
import { faEye } from '@fortawesome/free-solid-svg-icons';


const ViewChildrens = () => {

    const { data: childrens, isLoading } = useQuery('childrens', () => fetch(`https://amenaralo-server.vercel.app/allchildren`, {
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
                            <th className='responsivetable'>Contact</th>
                            <th className='s-code'>Class</th>
                            <th>Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            childrens?.map((children, index) => {
                                return (
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
                                        <td className='responsivetable'>
                                            {children?.mobile}

                                        </td>
                                        <td className='s-code'>
                                            {children?.cclass}
                                        </td>
                                        <th>
                                            <button className="btn btn-accent btn-xs detail-btn-u">details</button>
                                            <FontAwesomeIcon className="text-accent eye-icon" icon={faEye} />
                                        </th>

                                    </tr>
                                )
                            })

                        }



                    </tbody>

                    <tfoot>
                        <tr>

                            <th>Name</th>
                            <th className='responsivetable'>Contact</th>
                            <th className='s-code'>Class</th>
                            <th>Details</th>

                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ViewChildrens;