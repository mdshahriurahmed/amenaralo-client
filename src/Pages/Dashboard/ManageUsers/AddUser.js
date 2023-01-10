import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Loader from '../../Loader/Loader';

const AddUser = () => {
    const [loading, setLoading] = useState(false)
    const [prevuser] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendEmailVerification, sending, errorv] = useSendEmailVerification(
        auth
    );
    const role = ["Moderator", "Volunteer"];
    let signInError;
    if (error || errorv) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }

    const onSubmit = async data => {
        setLoading(true);
        await createUserWithEmailAndPassword(data.email, data.password);
        fetch(`https://amenaralo-server.vercel.app/user/${prevuser.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',

            },

        })
            .then(res => res.json())
            .then(data1 => {


                const Users = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    password: data.password,
                    mobile: data.mobile,
                    img: "https://firebasestorage.googleapis.com/v0/b/amenar-alo.appspot.com/o/image?alt=media&token=34521aaf-949c-4c9c-9466-3b24aea283a4"
                }
                fetch('https://amenaralo-server.vercel.app/Users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(Users)
                })
                    .then(res => res.json())
                    .then(inserted => {
                        if (inserted.insertedId) {

                            toast.success('User Added Successfully ad verification email sent');
                            reset();
                            setLoading(false)
                            sendEmailVerification();
                            signInWithEmailAndPassword(data1.plot.email, data1.plot.password);
                            navigate('/dashboard/manage-users/add-user')
                        }
                        else {
                            toast.error('Failled to add the user');
                        }
                    })
            })
    }


    return (
        <div className='flex h-screen justify-center items-center w-full'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add a New User</h2>
                    {
                        loading ? <Loader></Loader> : <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Enter Name" className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Mobile</span>
                                </label>
                                <input type="text" placeholder="Enter Mobile" className="input input-bordered w-full max-w-xs"
                                    {...register("mobile", {
                                        required: {
                                            value: true,
                                            message: 'Mobile is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Email" className="input input-bordered w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email' // JS only: <p>error message</p> TS only support string
                                        }
                                    })} />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                                </label>
                            </div>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="Enter Password" className="input input-bordered w-full max-w-xs"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
                                        }
                                    })} />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                                </label>
                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Role</span>
                                </label>
                                <select {...register("role")} class="select input-bordered w-full max-w-xs">
                                    {
                                        role.map(role1 =>
                                            <option value={role1.name}>{role1}</option>)
                                    }

                                </select>
                                <label className="label">
                                    {errors.role?.type === 'required' && <span className="label-text-alt text-red-500">{errors.role.message}</span>}
                                </label>
                            </div>


                            {signInError}
                            <input className='btn btn-block btn-primary' value="Add" type="submit" />
                        </form>
                    }
                </div>
            </div>

        </div>
    );
};

export default AddUser;