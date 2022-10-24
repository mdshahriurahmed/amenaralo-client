import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Viewuse.css"


const RemoveUser = () => {
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

                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Admin</div>
                                    </div>
                                </div>
                            </td>
                            <td className='responsivetable'>
                                avixpharmait@gmail.com
                                <br />
                                <span className="badge badge-ghost badge-sm">01771046952</span>
                            </td>
                            <th className='r-details'>
                                <button className="btn btn-accent btn-xs">details</button>
                            </th>
                            <th >
                                <button className="btn btn-dlt btn-xs ml-3"><span> <FontAwesomeIcon icon={faTrashCan} /></span></button>
                            </th>
                        </tr>

                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Brice Swyre</div>
                                        <div className="text-sm opacity-50">Moderator</div>
                                    </div>
                                </div>
                            </td>
                            <td className='responsivetable'>
                                avixpharmait@gmail.com
                                <br />
                                <span className="badge badge-ghost badge-sm">01771046952</span>
                            </td>
                            <th className='r-details'>
                                <button className="btn btn-accent btn-xs">details</button>
                            </th>
                            <th>
                                <button className="btn btn-dlt btn-xs ml-3"><span> <FontAwesomeIcon icon={faTrashCan} /></span></button>
                            </th>
                        </tr>

                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Marjy Ferencz</div>
                                        <div className="text-sm opacity-50">Volunteer</div>
                                    </div>
                                </div>
                            </td>
                            <td className='responsivetable'>
                                avixpharmait@gmail.com
                                <br />
                                <span className="badge badge-ghost badge-sm">01771046952 I</span>
                            </td>
                            <th className='r-details'>
                                <button className="btn btn-accent btn-xs">details</button>
                            </th>
                            <th>
                                <button className="btn btn-dlt btn-xs ml-3"><span> <FontAwesomeIcon icon={faTrashCan} /></span></button>
                            </th>
                        </tr>

                        <tr>

                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://daisyui.com/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Yancy Tear</div>
                                        <div className="text-sm opacity-50">Volunteer</div>
                                    </div>
                                </div>
                            </td>
                            <td className='responsivetable'>
                                avixpharmait@gmail.com
                                <br />
                                <span className="badge badge-ghost badge-sm">01771046952</span>
                            </td>
                            <th className='r-details'>
                                <button className="btn btn-accent btn-xs ">details</button>
                            </th>
                            <th>
                                <button className="btn btn-dlt btn-xs ml-3"><span> <FontAwesomeIcon icon={faTrashCan} /></span></button>
                            </th>
                        </tr>
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