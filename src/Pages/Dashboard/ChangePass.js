import React, { useState } from 'react';
import "./ChangePass.css"
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';


const ChangePass = () => {
    const [password, setPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const [user] = useAuthState(auth);
    const [commonerror, setCommonerror] = useState("");
    const [error1, setError1] = useState("");
    const [error2, setError2] = useState("");
    const [view, setView] = useState(false);
    const [view1, setView1] = useState(false);
    let load;
    if (updating) {
        return (load = <div className='flex items-center justify-center'>
            <Loader></Loader>
        </div>)

    }
    const changePassword = async (e) => {
        e.preventDefault();
        if (error) {
            return (setCommonerror(<p className='text-start text-red-500 mt-1'>Error: {error.message}</p>))

        }



        if (password1 === "") {
            return (setError2(<p className='text-start text-red-500 mt-1'>Please enter password</p>))

        }
        else {
            setError2(<p></p>)
            if (password === "") {
                return (setError1(<p className='text-start text-red-500 mt-1'>Please reenter Password</p>))

            }
            else {
                setError1(<p></p>)
                if (password1 !== password) {
                    return (setCommonerror(<p className='text-start text-red-500 mt-1'>Error: Both field need to have the same password</p>))

                }


                else {
                    setCommonerror(<p ></p>)
                    await updatePassword(password);

                    const currentUsers = {
                        email: user.email,
                        password: password,
                    }
                    fetch(`http://localhost:5000/CurrentUser/${user.email}`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(currentUsers)
                    })

                        .then(res => res.json())
                        .then(data1 => {

                            if (data1.matchedCount === 1) {
                                toast.success("Password updated successfully!");

                            }
                            else {
                                toast.error('Failled to login');
                            }
                        })
                    password.current.value = '';
                    password1.current.value = '';


                }
            }


        }

    }


    return (
        <div className='flex justify-center items-center w-full h-full '>

            <div className='card-pass shadow-lg border border-accent p-10'>
                <h1 className='font-bold text-2xl text-primary mb-5'>Change Password</h1>
                <input className=' border w-full border-accent px-4 h-10 rounded rounded-md'
                    type={`${view1 ? "text" : "password"}`}
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                    placeholder="Enter new password"
                />
                <div className='  mr-5 mb-3  cursor-pointer icon-eye' onClick={() =>
                    setView1(!view1)
                }>
                    <FontAwesomeIcon className={`${view1 ? "text-primary" : "text-accent"} text-base text-end`} icon={faEye} />
                </div>
                {error2}
                {/* ----------------------------------------- */}
                <input className=' border w-full border-accent h-10 px-4 rounded rounded-md mt-3'
                    type={`${view ? "text" : "password"}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Reenter new password"
                />
                <div className='  mr-5 mb-3  cursor-pointer icon-eye' onClick={() =>
                    setView(!view)
                }>
                    <FontAwesomeIcon className={`${view ? "text-primary" : "text-accent"} text-base text-end`} icon={faEye} />
                </div>
                {error1}
                <button
                    onClick={changePassword} className="mt-5 bg-primary text-base-100 w-full py-1 font-semibold rounded hover:border hover:border-primary hover:text-primary hover:bg-base-100 hover:shadow-lg mb-3"
                >
                    Update Password
                </button>
                {load}
                {commonerror}
            </div>
        </div>
    );
};

export default ChangePass;