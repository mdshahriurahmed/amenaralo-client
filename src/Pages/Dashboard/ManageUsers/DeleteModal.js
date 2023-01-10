
import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ cuser, refetch, setCuser }) => {
    const { email, role, name, img } = cuser;
    const handleDelete = email => {
        fetch(`https://amenaralo-server.vercel.app/delete-user/${email}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${role} ${name} is deleted successfully`);
                    setCuser(null);
                    refetch();
                }
                else {
                    toast.error(`Failled  to delete`);
                }
            })

    }
    return (
        <div className=' px-8'>

            <div className='w-full'>
                <input type="checkbox" id="delete-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle px-5">
                    <div className="modal-box ">
                        <h3 className="font-bold text-lg text-primary">Want to Delete the user?</h3>
                        <div className="avatar mt-5">
                            <div className="w-24 rounded">
                                <img src={img} alt="User iamge" />
                            </div>
                        </div>
                        <p className="pt-4 font-bold  border-b pb-2">Name: {name}</p>
                        <p className="border-b py-2">Current Role: {role}</p>
                        <p className="mb-4 border-b py-2">Email: {email}</p>
                        <div className="modal-action">
                            <label htmlFor="delete-modal" className="px-5 rounded text-base-100 font-bold cursor-pointer hover:bg-red-800 bg-red-600">No</label>
                            <label onClick={() => handleDelete(email)} htmlFor="delete-modal" className="px-5 rounded text-base-100 font-bold cursor-pointer hover:bg-orange-600 bg-primary">Yes!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;