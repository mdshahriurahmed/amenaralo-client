import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useState } from 'react';
import { storage } from '../../../firebasestorage';
import { useNavigate } from 'react-router-dom';

const AddChildren = () => {
    const [image, setImg] = useState(null);
    const [url, setUrl] = useState(null);
    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: classes, isLoading } = useQuery('classes', () => fetch('http://localhost:5000/classes').then(res => res.json()));

    if (isLoading) {
        return <Loader></Loader>
    }

    const handleChange = e => {
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        }
    }
    const onSubmit = async data => {

        const imageRef = ref(storage, `${image.name}`)
        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {

                        // code to send data on database

                        const Childrens = {
                            name: data.name,
                            email: data.email,
                            clstitle: data.clstitle,
                            img: `${url}`
                        }
                        fetch('http://localhost:5000/Childrens', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(Childrens)
                        })
                            .then(res => res.json())
                            .then(inserted => {
                                if (inserted.insertedId) {

                                    toast.success('User Added Successfully ad verification email sent');
                                    reset();
                                    setUrl(url)
                                    setImg(null)
                                    navigate('/dashboard/manage-childrens/add-children')
                                }
                                else {
                                    toast.error('Failled to add the children');
                                }
                            })

                    }).catch(error => {
                        console.log(error.message);
                    })

            }).catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='flex h-screen justify-center items-center w-full'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add a New Children</h2>
                    <div>
                        <img src={url} alt="" className='w-20 h-20' />
                        <input type="file" onChange={handleChange} />

                    </div>
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
                                <span className="label-text">Class</span>
                            </label>
                            <select {...register("clstitle")} className="select input-bordered w-full max-w-xs ">
                                {
                                    classes.map(cls =>
                                        <option key={cls._id} value={cls.clstitle}><span className='clsopt'>{cls.clstitle}</span></option>)
                                }

                            </select>
                            <label className="label">
                                {errors.clstitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.clstitle.message}</span>}
                            </label>
                        </div>



                        <input className='btn btn-block btn-primary' value="Add" type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddChildren;