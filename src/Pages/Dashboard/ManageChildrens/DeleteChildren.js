import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loader from '../../Loader/Loader';
import DeleteChild from './DeleteChild';
import "./ViewChildrens"


const RemoveChildren = () => {
    const [cchild, setCchild] = useState([])
    const { data: childrens, isLoading, refetch } = useQuery('childrens', () => fetch('https://amenaralo.up.railway.app/allchildren', {
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
                            <th className='responsivetable'>Class</th>
                            <th className='r-details'>Details</th>
                            <th>Action</th>
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
                                                        <img src={children?.img} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{children?.name}</div>
                                                    <div className="text-sm opacity-50">ID: {children.s_id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='responsivetable'>
                                            {children?.cclass}

                                        </td>
                                        <th className='r-details'>
                                            <button className="btn btn-accent btn-xs">details</button>
                                        </th>
                                        <th >
                                            <label onClick={() => { setCchild(children) }} htmlFor="deletechild" className="btn btn-dlt btn-xs ml-3"><span> <FontAwesomeIcon icon={faTrashCan} /></span></label>
                                        </th>
                                    </tr>
                                )

                            })

                        }
                        {
                            cchild && <DeleteChild key={cchild._id}
                                cchild={cchild}
                                setCchild={setCchild}
                                refetch={refetch}></DeleteChild>
                        }




                    </tbody>

                    <tfoot>
                        <tr>

                            <th>Name</th>
                            <th className='responsivetable'>Class</th>
                            <th className='r-details'>Details</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default RemoveChildren;