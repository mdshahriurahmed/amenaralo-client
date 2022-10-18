import React, { useState } from 'react';
import "./ChangePass.css"
import { useUpdateEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loader from '../Loader/Loader';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
let stat = "true";

const ChangeEmail = () => {
    const [password, setPassword] = useState('');
    const [updateEmail, updating, error] = useUpdateEmail(auth);
    const [commonerror, setCommonerror] = useState("");
    const [error1, setError1] = useState("");
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
        return (load = <div className='flex items-center justify-center'>
            <Loader></Loader>
        </div>)

    }

    const changePassword = async (e) => {
        e.preventDefault();

        if (password === "") {
            return (setError1(<p className='text-start text-red-500 mt-1'>Please reenter Password</p>))

        }
        else {
            setError1(<p></p>)
            await updateEmail(password);
            if (!error) {
                toast.success("Email Updated Successfully")
            }


        }

    }


    return (
        <div className='flex justify-center items-center w-full h-full '>

            <div className='card-pass shadow-lg border border-accent p-10'>
                <h1 className='font-bold text-2xl text-primary mb-5'>Change Password</h1>

                {/* ----------------------------------------- */}
                <input className=' border w-full border-accent h-10 px-4 rounded rounded-md mt-3'
                    type={`${view ? "text" : "password"}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='  mr-5 mb-3  cursor-pointer icon-eye' onClick={() =>
                    setView(!view)
                }>
                    <FontAwesomeIcon className={`${view ? "text-primary" : "text-accent"} text-base text-end`} icon={faEye} />
                </div>
                {error1}
                <button
                    onClick={e => changePassword(e)}
                    className="mt-5 bg-primary text-base-100 w-full py-1 font-semibold rounded hover:border hover:border-primary hover:text-primary hover:bg-base-100 hover:shadow-lg mb-3"
                >
                    Update Password
                </button>
                {load}
                {commonerror}
            </div>
        </div>
    );
};

export default ChangeEmail;