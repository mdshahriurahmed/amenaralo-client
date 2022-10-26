import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import DeleteModal from './DeleteModal';
import "./Viewuse.css"


const RemoveUser = () => {
    const [cuser, setCuser] = useState([])
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
                            <th className='r-details'>Details</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => {
                                if (user.role !== "Admin") {
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
                                            <th className='r-details'>
                                                <button className="btn btn-accent btn-xs">details</button>
                                            </th>
                                            <th >
                                                <label onClick={() => { setCuser(user) }} htmlFor="delete-modal" className="btn btn-dlt btn-xs ml-3"><span> <FontAwesomeIcon icon={faTrashCan} /></span></label>
                                            </th>
                                        </tr>
                                    )
                                }
                            })

                        }
                        {
                            cuser && <DeleteModal key={cuser._id}
                                cuser={cuser}
                                setCuser={setCuser}
                                refetch={refetch}></DeleteModal>
                        }




                    </tbody>

                    <tfoot>
                        <tr>

                            <th>Name</th>
                            <th className='responsivetable'>Contact</th>
                            <th className='r-details'>Details</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default RemoveUser;