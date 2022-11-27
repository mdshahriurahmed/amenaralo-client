
import React from 'react';
import { toast } from 'react-toastify';


const DeleteChild = ({ cchild, refetch, setCchild }) => {

    const { cclass, s_id, name, img, _id } = cchild;
    const handleDelete = _id => {

        fetch(`https://amenaralo.up.railway.app/delete-child/${_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(` ${name} is deleted successfully`);
                    setCchild(null);
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
                <input type="checkbox" id="deletechild" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle px-5">
                    <div className="modal-box ">
                        <h3 className="font-bold text-lg text-primary">Want to delete the student? {_id}</h3>
                        <div className="avatar mt-5">
                            <div className="w-24 rounded">
                                <img src={img} alt="student iamge" />
                            </div>
                        </div>
                        <p className="pt-4 font-bold  border-b pb-2">Name: {name}</p>
                        <p className="border-b py-2">Student ID: {s_id}</p>
                        <p className="mb-4 border-b py-2">Class: {cclass}</p>
                        <div className="modal-action">
                            <label htmlFor="deletechild" className="px-5 rounded text-base-100 font-bold cursor-pointer hover:bg-red-800 bg-red-600">No</label>
                            <label onClick={() => handleDelete(_id)} htmlFor="deletechild" className="px-5 rounded text-base-100 font-bold cursor-pointer hover:bg-orange-600 bg-primary">Yes!</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteChild;