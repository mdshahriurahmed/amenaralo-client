import React, { useState } from 'react';
import "./Login.css"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

const Login = () => {

    const [view, setView] = useState(false);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {

        const currentUsers = {
            email: data.email,
            password: data.password,
        }


        fetch(`http://localhost:5000/isuser/${data.email}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            },

        })
            .then(res => res.json())
            .then(data2 => {

                if (data2 === true) {

                    fetch(`http://localhost:5000/CurrentUser/${data.email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(currentUsers)
                    })

                        .then(res => res.json())
                        .then(data1 => {
                            signInWithEmailAndPassword(data.email, data.password);
                        })

                }
                else {
                    toast.error('Opps! You are not a registered user');
                }


            })


    };

    let sError;
    const navigate = useNavigate();

    if (error) {

        sError = <p className='text-red-500'> {error.message}</p>


    }
    if (loading) {
        return <div className='flex items-center justify-center min-h-screen'>
            <Loading loading={loading}></Loading>
        </div>;
    }

    if (user) {
        navigate("/dashboard")
    }
    return (
        <div className='h-screen flex justify-center items-center px-5'>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-primary font-bold">LOGIN</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>

                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs"
                                    {...register("email",
                                        {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                message: "Please enter a valid email address"
                                            }
                                        })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>

                                </label>
                                <input type={`${view ? "text" : "password"}`} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs"
                                    {...register("password",
                                        {
                                            required: {
                                                value: true,
                                                message: "Password is required"
                                            },
                                            minLength: {
                                                value: 6,
                                                message: "Password must have to be at least of 6 characters"
                                            }
                                        })}
                                />
                                <div className='ml-72 -mt-9 mr-5 mb-3 cursor-pointer ' onClick={() =>
                                    setView(!view)
                                }>
                                    <FontAwesomeIcon className={`${view ? "text-primary" : "text-accent"} text-base`} icon={faEye} />
                                </div>
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {sError}
                            <input type="submit" className='btn btn-block btn-primary mt-3 mb-4' value="LOGIN" />

                        </form>
                        <Link to="/forget-password" className='text-primary '>Forget Password?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;