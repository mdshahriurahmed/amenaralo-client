import React from 'react';
import "./Login.css"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data.email, data.password)
    };

    let sError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";
    if (error) {

        sError = <p className='text-red-500'> {error.message}</p>


    }
    if (loading) {
        return <div className='flex items-center justify-center min-h-screen'>
            <Loading loading={loading}></Loading>
        </div>;
    }

    if (user) {
        navigate(from, { replace: true })
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
                                <input type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs"
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
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>
                            {sError}
                            <input type="submit" className='btn btn-block btn-primary mt-3' value="LOGIN" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;