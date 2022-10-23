import React from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import "./Viewuse.css"


const ViewUser = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/alluser', {
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
                            <th>Details</th>
                            <th>Short Code</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                return (
                                    <tr>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={user.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{user.name}</div>
                                                    <div className="text-sm opacity-50">{user.role}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='responsivetable'>
                                            {user.email}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{user.mobile}</span>
                                        </td>
                                        <th>
                                            <button className="btn btn-accent btn-xs">details</button>
                                        </th>
                                        <td>
                                            AA-2
                                        </td>
                                    </tr>
                                )
                            })

                        }



                    </tbody>

                    <tfoot>
                        <tr>

                            <th>Name</th>
                            <th className='responsivetable'>Contact</th>
                            <th>Details</th>
                            <th>Short Code</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default ViewUser;