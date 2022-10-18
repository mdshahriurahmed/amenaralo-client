import React, { useRef, useState } from 'react';
import "./Login.css"
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const ForgetPass = () => {



    const emailRef = useRef('');
    const [sError, setErrorr] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    const resetPassword = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (error) {

            return (setErrorr(error.message))
        }
        if (sending) {
            return <div className='flex items-center justify-center min-h-screen'>
                <Loading loading={sending}></Loading>
            </div>;
        }
        if (email === '') {
            return (setErrorr('Please enter email'))

        }
        else {
            await sendPasswordResetEmail(email);
            toast.success('Email sent for password reset');
            emailRef.current.value = '';
        }
    }


    return (
        <div className='h-screen flex justify-center items-center px-5'>
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl text-primary font-bold">Forget Password</h2>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            className='input input-bordered w-full max-w-xs'
                            type="email" ref={emailRef}
                        />
                        <p className='text-red-500 mt-3'>   {sError}</p>

                        <button className='btn btn-block btn-primary mt-5 mb-4'
                            onClick={resetPassword}
                        >
                            Reset password
                        </button>

                        <Link to="/login" className='text-text-accent '>Go to <span className='text-primary '>login</span>  page!!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPass;