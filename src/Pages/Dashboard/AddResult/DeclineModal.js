import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const DeclineModal = ({ resultinfo, setResult }) => {
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const id = resultinfo._id;
    const onSubmit = async data => {
        const cmnt = {
            comment: data.cmn1
        }
        fetch(`https://amenaralo-server.vercel.app/declined/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(cmnt)
        })
            .then(res => {
                if (res.status === 404) {
                    toast.error('Failed to decline the result');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    navigate("/dashboard/resul-request")
                    toast.success('Result Declined');
                }
            })
        setResult(null)
    }
    return (
        <div>
            <input type="checkbox" id="declinemodal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit(onSubmit)} className="px-5 text-start">

                        <div className='flex md:flex-row flex-col w-full'>

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Write reason</span>
                                </label>
                                <textarea placeholder="Write reacon for decline" className="textarea textarea-bordered w-full "
                                    {...register("cmn1", {
                                        required: {
                                            value: true,
                                            message: 'Mark is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.bangla?.type === 'required' && <span className="label-text-alt text-red-500">{errors.bangla.message}</span>}
                                </label>
                            </div>




                        </div>



                        <input className='btn btn-block btn-primary md:mt-2 btn-sm mt-5' value="Submit" type="submit" />







                    </form>

                </div>
            </div>
        </div>
    );
};

export default DeclineModal;