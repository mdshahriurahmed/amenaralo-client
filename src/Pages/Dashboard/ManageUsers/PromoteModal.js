
import React from 'react';
import { toast } from 'react-toastify';

const PromoteModal = ({ cuser, refetch }) => {
    const { email, role, name, img } = cuser;
    const makeModerator = () => {
        fetch(`http://localhost:5000/user/make-moderator/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to create admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Promoted Successfully');
                }
            })

    }
    return (
        <div className=' px-8'>

            <div className='w-full'>
                <input type="checkbox" id="promote-modal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle px-5">
                    <div className="modal-box ">
                        <h3 className="font-bold text-lg text-primary">Want to promote the user?</h3>
                        <div className="avatar mt-5">
                            <div className="w-24 rounded">
                                <img src={img} alt="User iamge" />
                            </div>
                        </div>
                        <p className="pt-4 font-bold  border-b pb-2">Name: {name}</p>
                        <p className="border-b py-2">Current Role: {role}</p>
                        <p className="mb-4 border-b py-2">Email: {email}</p>
                        <div className="modal-action">
                            <label htmlFor="promote-modal" className="px-5 rounded text-base-100 font-bold cursor-pointer hover:bg-red-800 bg-red-600">No</label>
                            <label onClick={makeModerator} htmlFor="promote-modal" className="px-5 rounded text-base-100 font-bold cursor-pointer hover:bg-orange-600 bg-primary">Yes!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoteModal;