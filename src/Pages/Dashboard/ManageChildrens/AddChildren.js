import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { useState } from 'react';
import { storage } from '../../../firebasestorage';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import "./AddChildren.css"



const AddChildren = () => {
    const [image, setImg] = useState(null);
    const [p_url, setUrl] = useState(null);

    const navigate = useNavigate();
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])


    const { data: classes, isLoading1 } = useQuery('classes', () => fetch(`http://localhost:5000/classes`).then(res => res.json()));

    const { data: currentid, isLoading, refetch } = useQuery('currentid', () => fetch(`http://localhost:5000/currentid`).then(res => res.json()));

    if (isLoading || isLoading1) {
        return <Loader></Loader>
    }

    let previd = parseInt(currentid[0]?.cid)
    let new_id = previd + 1;

    const handleChange = e => {
        if (e.target.files[0]) {
            setImg(e.target.files[0])

        }
    }
    const imgname = new_id + image?.name

    const onSubmit = async data => {
        setLoading1(true)
        const imageRef = ref(storage, `${imgname}`)

        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {

                        // code to send data on database
                        setUrl(url)
                        const newID = {
                            cid: new_id
                        }
                        const Childrens = {
                            s_id: new_id,
                            name: data.name,
                            fname: data.fname,
                            mname: data.mname,
                            mobile: data.mobile,
                            address: data.address,
                            fnid: data.fnid,
                            mnid: data.mnid,
                            dob: data.dob,
                            dobn: data.dobn,
                            sclname: data.sclname,
                            clstitle: data.clstitle,
                            cclass: data.clstitle,
                            bskill: data.bskill,
                            eskill: data.eskill,
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
                                    fetch(`http://localhost:5000/currentid/635ceb379dfb9c79856d6103`, {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json',
                                        },
                                        body: JSON.stringify(newID)
                                    })

                                        .then(res => res.json())
                                        .then(data1 => {
                                            toast.success('Children Added Successfully');
                                            reset();
                                            refetch();
                                            setLoading1(false)
                                            setImg(null)
                                            navigate('/dashboard/manage-childrens/add-children')
                                        })

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
        loading ? <div >
            <Loader></Loader>
        </div> :
            <div className='flex h-screen justify-center items-center w-full md:mt-20 md:pt-10 mb-40 mt-96 pt-48'>
                <div className="card md:w-full w-96 bg-base-100 shadow-xl">
                    <div className="card-body ">
                        <h2 className="text-center text-2xl font-bold mb-5">Add a New Children</h2>

                        {
                            loading1 ? <Loader></Loader> :
                                <div>
                                    <div className='imageinput'>
                                        <img src={image} alt="" />
                                        <label for="inputTagfile">

                                            <FontAwesomeIcon className='spicon imgicon' icon={faCamera} />
                                            <input id="inputTagfile" onChange={handleChange} type="file" required />
                                            <br />
                                            <span id="imageName"></span>
                                        </label>
                                        {image ?
                                            <p>{image?.name} selected </p> : <></>}
                                    </div>
                                    <form onSubmit={handleSubmit(onSubmit)}>

                                        <div className='flex md:flex-row flex-col w-full'>
                                            <div className='md:w-3/6 md:px-8'>
                                                {/* ----name------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Name</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Name" className="input input-bordered w-full "
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

                                                {/* ---- Father's name------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Father's Name</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Father's Name" className="input input-bordered w-full "
                                                        {...register("fname", {
                                                            required: {
                                                                value: true,
                                                                message: "Father's Name is required"
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.fname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fname.message}</span>}
                                                    </label>
                                                </div>

                                                {/* ---- Mother's name------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Mother's Name</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Mother's Name" className="input input-bordered w-full "
                                                        {...register("mname", {
                                                            required: {
                                                                value: true,
                                                                message: "Mother's Name is required"
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.mname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mname.message}</span>}
                                                    </label>
                                                </div>

                                                {/* ---- Mobile Number------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Mobile</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Mobile Number" className="input input-bordered w-full "
                                                        {...register("mobile", {
                                                            required: {
                                                                value: true,
                                                                message: "Mobile Number is required"
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.mobile?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mobile.message}</span>}
                                                    </label>
                                                </div>
                                                {/* ---- Address ------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Address</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Address" className="input input-bordered w-full "
                                                        {...register("address", {
                                                            required: {
                                                                value: true,
                                                                message: "Address is required"
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                                                    </label>
                                                </div>
                                                {/* ---- Father's NID------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Father's NID</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Father's NID" className="input input-bordered w-full "
                                                        {...register("fnid", {
                                                            required: {
                                                                value: true,
                                                                message: "Father's NID is required"
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.fnid?.type === 'required' && <span className="label-text-alt text-red-500">{errors.fnid.message}</span>}
                                                    </label>
                                                </div>

                                                {/* ---- Mother's NID------- */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Mother's NID</span>
                                                    </label>
                                                    <input type="text" placeholder="Enter Mother's NID" className="input input-bordered w-full "
                                                        {...register("mnid", {
                                                            required: {
                                                                value: true,
                                                                message: "Mother's NID is required"
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.mnid?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mnid.message}</span>}
                                                    </label>
                                                </div>
                                            </div>
                                            <div className='md:w-3/6 md:px-8'>
                                                {/* ------ Date of Birth ----*/}

                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Date of Birth(DOB)   </span>
                                                    </label>
                                                    <input type="date" placeholder="Enter Date of Birth" className="input input-bordered w-full "
                                                        {...register("dob", {
                                                            required: {
                                                                value: true,
                                                                message: 'Date of Birth is required'
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.dob?.type === 'required' && <span className="label-text-alt text-red-500">{errors.dob.message}</span>}
                                                    </label>
                                                </div>
                                                {/* ------ Date of birth number ----*/}

                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">DOB Number   </span>
                                                    </label>
                                                    <input type="text" placeholder="Enter DOB Number" className="input input-bordered w-full "
                                                        {...register("dobn", {
                                                            required: {
                                                                value: true,
                                                                message: 'DOB Number is required'
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.dobn?.type === 'required' && <span className="label-text-alt text-red-500">{errors.dobn.message}</span>}
                                                    </label>
                                                </div>

                                                {/* ------ School Name ----*/}

                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">School Name   </span>
                                                    </label>
                                                    <input type="text" placeholder="Enter School Name" className="input input-bordered w-full "
                                                        {...register("sclname", {
                                                            required: {
                                                                value: true,
                                                                message: 'School Name is required'
                                                            }
                                                        })} />
                                                    <label className="label">
                                                        {errors.sclname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.sclname.message}</span>}
                                                    </label>
                                                </div>

                                                {/* class */}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Class</span>
                                                    </label>
                                                    <select {...register("clstitle")} className="select input-bordered w-full  ">
                                                        {
                                                            classes.map(cls =>
                                                                <option key={cls._id} value={cls?.clstitle}><span className='clsopt'>{cls?.clstitle}</span></option>)
                                                        }

                                                    </select>
                                                    <label className="label">
                                                        {errors.clstitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.clstitle.message}</span>}
                                                    </label>
                                                </div>

                                                {/* ------ Bengali skill range ----*/}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">Bengali Skill</span>
                                                    </label>
                                                    <select {...register("bskill")} className="select input-bordered w-full  ">
                                                        {
                                                            skills.map(bskill =>
                                                                <option key={bskill.index} value={bskill}><span className='clsopt'>{bskill}</span></option>)
                                                        }

                                                    </select>
                                                    <label className="label">
                                                        {errors.bskill?.type === 'required' && <span className="label-text-alt text-red-500">{errors.bskill.message}</span>}
                                                    </label>
                                                </div>
                                                {/* ------ English skill range ----*/}
                                                <div className="form-control w-full ">
                                                    <label className="label">
                                                        <span className="label-text">English Skill</span>
                                                    </label>
                                                    <select {...register("eskill")} className="select input-bordered w-full  ">
                                                        {
                                                            skills.map(eskill =>
                                                                <option key={eskill.index} value={eskill}><span className='clsopt'>{eskill}</span></option>)
                                                        }

                                                    </select>
                                                    <label className="label">
                                                        {errors.eskill?.type === 'required' && <span className="label-text-alt text-red-500">{errors.eskill.message}</span>}
                                                    </label>
                                                </div>


                                                <input className='btn btn-block btn-primary md:mt-9' value="Add" type="submit" />
                                            </div>
                                        </div>


                                    </form>
                                </div>
                        }
                    </div>
                </div>

            </div>
    );
};

export default AddChildren;