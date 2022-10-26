import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../Loader/Loader';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [prevuser] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [
        createUserWithEmailAndPassword,

        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [
        signInWithEmailAndPassword,
        loading1,
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

        await createUserWithEmailAndPassword(data.email, data.password);
        fetch(`http://localhost:5000/user/${prevuser.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',

            },

        })
            .then(res => res.json())
            .then(data1 => {
                console.log(data1);

                const Users = {
                    name: data.name,
                    email: data.email,
                    role: data.role,
                    password: data.password,
                    mobile: data.mobile,
                    img: "https://firebasestorage.googleapis.com/v0/b/amenar-alo.appspot.com/o/default%20img.9da6e88fcb1239f3e809.png?alt=media&token=02ba87cb-d77c-492f-b1ab-204ce239ee6f"
                }
                fetch('http://localhost:5000/Users', {
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
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                </div>
            </div>

        </div>
    );
};

export default AddUser;