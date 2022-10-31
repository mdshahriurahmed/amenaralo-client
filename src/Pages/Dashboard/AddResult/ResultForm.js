import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../Loader/Loader';
import "./ResultForm.css"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { storage } from '../../../firebasestorage';

const ResultForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const id = _id;
    const navigate = useNavigate();
    const [image, setImg] = useState(null);
    const [p_url, setUrl] = useState(null);
    const years = ["2021", "2022", "2023", "2024", "2025",];
    const [sclass, setSclass] = useState("")
    const { data: children, isLoading } = useQuery('children', () => fetch(`http://localhost:5000/children/${id}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        }
    }).then(res => res.json()));
    const { data: classes, isLoading1 } = useQuery('classes', () => fetch(`http://localhost:5000/classes`).then(res => res.json()));
    if (isLoading || isLoading1) {
        return <Loader></Loader>
    }


    let new_id = parseInt(children?.s_id)

    const handleChange = e => {
        if (e.target.value) {
            setSclass(e.target.value)

        }
    }
    let imerror;
    const handleChangeimg = e => {
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        }
        else {
            return (imerror = <p className='text-start text-red-500'>Please choose image</p>)
        }
    }
    const imgname = new_id + image?.name
    const onSubmit = async data => {

        const imageRef = ref(storage, `${imgname}`)

        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {

                        // code to send data on database
                        setUrl(url)
                        console.log(url);
                        // const newID = {
                        //     cid: new_id
                        // }
                        // const Childrens = {
                        //     s_id: new_id,
                        //     name: data.name,
                        //     fname: data.fname,
                        //     mname: data.mname,
                        //     mobile: data.mobile,
                        //     address: data.address,
                        //     fnid: data.fnid,
                        //     mnid: data.mnid,
                        //     dob: data.dob,
                        //     dobn: data.dobn,
                        //     sclname: data.sclname,
                        //     clstitle: data.clstitle,
                        //     cclass: data.clstitle,
                        //     bskill: data.bskill,
                        //     eskill: data.eskill,
                        //     img: `${url}`
                        // }
                        // fetch('http://localhost:5000/Childrens', {
                        //     method: 'POST',
                        //     headers: {
                        //         'content-type': 'application/json',
                        //     },
                        //     body: JSON.stringify(Childrens)
                        // })
                        //     .then(res => res.json())
                        //     .then(inserted => {
                        //         if (inserted.insertedId) {
                        //             fetch(`http://localhost:5000/currentid/635ceb379dfb9c79856d6103`, {
                        //                 method: 'POST',
                        //                 headers: {
                        //                     'content-type': 'application/json',
                        //                 },
                        //                 body: JSON.stringify(newID)
                        //             })

                        //                 .then(res => res.json())
                        //                 .then(data1 => {
                        //                     toast.success('Children Added Successfully');
                        //                     reset();
                        //                     setImg(null)
                        //                     navigate('/dashboard/manage-childrens')
                        //                 })

                        //         }
                        //         else {
                        //             toast.error('Failled to add the children');
                        //         }
                        //     })

                    }).catch(error => {
                        console.log(error.message);
                    })

            }).catch(error => {
                console.log(error.message);
            })
    }
    return (
        <div className='py-16 w-full shadow-lg border border-accent rounded-md px-8 flex flex-row'>

            <div className='width-c-form1'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className='md:text-start md:pl-8 md:mb-5'><i>Note: please select class to get all options</i></p>
                    <div className='flex md:flex-row flex-col w-full'>
                        <div className='md:w-3/6 md:px-8'>
                            {/* class */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Class</span>
                                </label>
                                <select {...register("clstitle")} className="select input-bordered w-full  " onChange={handleChange}>
                                    {
                                        classes?.map(cls =>
                                            <option key={cls._id} value={cls?.clstitle}><span className='clsopt'>{cls?.clstitle}</span></option>)
                                    }

                                </select>
                                <label className="label">
                                    {errors.clstitle?.type === 'required' && <span className="label-text-alt text-red-500">{errors.clstitle.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='md:w-3/6 md:px-8'>
                            {/* years*/}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Year</span>
                                </label>
                                <select {...register("year_v")} className="select input-bordered w-full  " onChange={handleChange}>
                                    {
                                        years?.map(yr =>
                                            <option value={yr}><span className='clsopt'>{yr}</span></option>)
                                    }

                                </select>
                                <label className="label">
                                    {errors.year_v?.type === 'required' && <span className="label-text-alt text-red-500">{errors.year_v.message}</span>}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col w-full'>
                        <div className='md:w-3/6 w-full lg:px-8 md:px-2'>

                            {/* ----Bangla------- */}

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bangla</span>
                                </label>
                                <input type="number" placeholder="Enter Mark" className="input input-bordered w-full "
                                    {...register("bangla", {
                                        required: {
                                            value: true,
                                            message: 'Mark is required'
                                        }
                                    })} />
                                <label className="label">
                                    {errors.bangla?.type === 'required' && <span className="label-text-alt text-red-500">{errors.bangla.message}</span>}
                                </label>
                            </div>




                            {/* ---- Mathematics------- */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Mathematics</span>
                                </label>
                                <input type="number" placeholder="Enter Mark" className="input input-bordered w-full "
                                    {...register("mathematics", {
                                        required: {
                                            value: true,
                                            message: "Mark is required"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.mathematics?.type === 'required' && <span className="label-text-alt text-red-500">{errors.mathematics.message}</span>}
                                </label>
                            </div>

                            {/* ---- subject comes class wise------- */}
                            {
                                sclass === "Class 3" || sclass === "Class 4" || sclass === "Class 5" ? <div>
                                    {/* ---- Bangladesh and Global Studies------- */}
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Bangladesh and Global Studies</span>
                                        </label>
                                        <input type="number" placeholder="Enter Mark" className="input input-bordered w-full "
                                            {...register("bgstudies", {
                                                required: {
                                                    value: true,
                                                    message: "Mark is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.bgstudies?.type === 'required' && <span className="label-text-alt text-red-500">{errors.bgstudies.message}</span>}
                                        </label>
                                    </div>
                                    {/* ---- Islamic Studies------- */}
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">Religious Studies</span>
                                        </label>
                                        <input type="number" placeholder="Enter Mark" className="input input-bordered w-full "
                                            {...register("religion", {
                                                required: {
                                                    value: true,
                                                    message: "Mark is required"
                                                }
                                            })} />
                                        <label className="label">
                                            {errors.religion?.type === 'required' && <span className="label-text-alt text-red-500">{errors.religion.message}</span>}
                                        </label>
                                    </div>

                                </div> : <></>
                            }


                        </div>
                        <div className='md:w-3/6 w-full lg:px-8 md:px-2'>
                            {/* ---- English------- */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">English</span>
                                </label>
                                <input type="number" placeholder="Enter Mark" className="input input-bordered w-full "
                                    {...register("english", {
                                        required: {
                                            value: true,
                                            message: "Mark is required"
                                        }
                                    })} />
                                <label className="label">
                                    {errors.english?.type === 'required' && <span className="label-text-alt text-red-500">{errors.english.message}</span>}
                                </label>
                            </div>

                            {/* ---- subject comes class wise------- */}
                            {
                                sclass === "Class 3" || sclass === "Class 4" || sclass === "Class 5" ? <div>
                                    {/* ---- General Science------- */}
                                    <div className="form-control w-full ">
                                        <label className="label">
                                            <span className="label-text">General Science</span>
                                        </label>
                                        <input type="number" placeholder="Enter Mark" className="input input-bordered w-full "
                                            {...register("gscience", {
                                                required: {
                                                    value: true,
                                                    message: "Mark is required"
                                                }
                                            })} />

                                        <label className="label">
                                            {errors.gscience?.type === 'required' && <span className="label-text-alt text-red-500">{errors.gscience.message}</span>}
                                        </label>
                                    </div>

                                </div> : <></>
                            }


                            {/* upload image */}
                            <div className=''>
                                <label className="label">
                                    <span className="label-text">Upload marksheet</span>
                                </label>
                                <label for="inputTagfile">
                                    <input id="inputTagfile" onChange={handleChangeimg} type="file" className='input input-bordered w-full' required />
                                    <br />
                                    <span id="imageName"></span>
                                </label>

                            </div>

                            {
                                sclass === "Class 3" || sclass === "Class 4" || sclass === "Class 5" ? <input className='btn btn-block btn-primary md:mt-9 ' value="Add Result" type="submit" /> : <></>
                            }

                        </div>

                    </div>

                    <div className=' w-full lg:px-8 md:px-2'>
                        {
                            sclass === "" || sclass === "Class 1" || sclass === "Class 2" ? <input className='btn btn-block btn-primary md:mt-2' value="Add Result" type="submit" /> : <></>
                        }

                    </div>

                </form>
            </div>
            <div className='width-c-form2'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={children?.img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultForm;