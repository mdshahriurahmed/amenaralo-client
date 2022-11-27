import React, { useState } from 'react';
import "./ChangePass.css"
import { useAuthState, useUpdateEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import useUser from '../Hooks/useUser';
import { useEffect } from 'react';
import { useQuery } from 'react-query';



const ChangeEmail = () => {
    const [email, setEmail] = useState('');
    const [updateEmail, updating, error] = useUpdateEmail(auth);
    const [error1, setError1] = useState("");
    const [user] = useAuthState(auth);
    let load;
    let error2;

    const [userdetail] = useUser(user)
    const { mobile } = userdetail;



    if (error) {

        error2 = <div>
            <p className='text-red-500 mt-1'>Error: {error.message}</p>
        </div>

    }
    if (updating) {
        load = <div className='flex items-center justify-center'>
            <Loader></Loader>
        </div>

    }

    const changeEmail1 = async (e) => {
        e.preventDefault();



        if (email === "") {
            return (setError1(<p className='text-start text-red-500 mt-1'>Please enter email </p>))

        }
        else {
            setError1(<p></p>)
            await updateEmail(email);
            if (user.email === email) {
                const newmail = {
                    email: email
                }

                fetch(`https://amenaralo.up.railway.app/usernew1/${mobile}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(newmail)
                })

                    .then(res => res.json())
                    .then(data1 => {
                        toast.success('Email changed successfully!!');
                    })
            }
            else {
                toast.error('Failed to change email..');
            }
        }


    }




    return (
        <div className='flex justify-center items-center w-full h-full '>

            <div className='card-pass shadow-lg border border-accent p-10'>
                <h1 className='font-bold text-2xl text-primary mb-5'>Change Email</h1>

                {/* ----------------------------------------- */}

                <input className=' border w-full border-accent h-10 px-4 rounded rounded-md mt-3'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter new email"
                />

                {error1}
                <button
                    onClick={e => changeEmail1(e)}
                    className="mt-5 bg-primary text-base-100 w-full py-1 font-semibold rounded hover:border hover:border-primary hover:text-primary hover:bg-base-100 hover:shadow-lg mb-3"
                >
                    Change Email
                </button>
                {load}
                {error2}
                <div><p className='text-sm'><i>Note: Before trying to change email kindly logut and then login again. After that change email </i></p></div>
            </div>
        </div>
    );
};

export default ChangeEmail;