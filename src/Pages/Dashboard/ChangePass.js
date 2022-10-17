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
    const [oldpassword, setOldPassword] = useState('');
    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const [user] = useAuthState(auth);
    const email = user.email;
    const [view, setView] = useState(false);
    let load;
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (updating) {
        load = <div className='flex items-center justify-center'>
            <Loader></Loader>
        </div>;
    }
    return (
        <div className='flex justify-center items-center w-full h-full '>
            <div className='card-pass shadow-lg border border-accent p-10'>

                <input className=' border w-full border-accent h-10 rounded rounded-md'
                    type={`${view ? "text" : "password"}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='  mr-5 mb-3  cursor-pointer icon-eye' onClick={() =>
                    setView(!view)
                }>
                    <FontAwesomeIcon className={`${view ? "text-primary" : "text-accent"} text-base text-end`} icon={faEye} />
                </div>

                <button
                    onClick={async () => {

                        await updatePassword(password);
                        toast.success("Password updated successfully!");

                    }}
                >
                    Update password
                </button>
                {load}
            </div>
        </div>
    );
};

export default ChangePass;