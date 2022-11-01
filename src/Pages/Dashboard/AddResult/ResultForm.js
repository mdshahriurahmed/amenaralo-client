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
import useUser from '../../Hooks/useUser';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ResultForm = () => {
    const [user] = useAuthState(auth);
    const [userdetail] = useUser(user)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const id = _id;
    const navigate = useNavigate();
    const [loadspin, setLoad] = useState(false)
    const [image, setImg] = useState(null);
    const [p_url, setUrl] = useState(null);
    const years = ["2021", "2022", "2023", "2024", "2025",];
    const exams = ["1st Term", "2nd Term", "Final"];
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

    const handleChangeimg = e => {
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        }

    }
    const imgname = new_id + image?.name
    const onSubmit = async data => {
        setLoad(true)
        const imageRef = ref(storage, `${imgname}`)

        uploadBytes(imageRef, image)
            .then(() => {
                getDownloadURL(imageRef)
                    .then((url) => {

                        // code to send data on database
                        setUrl(url)
                        let result;
                        if (data.clstitle === "Class 1" || data.clstitle === "Class 2") {
                            result = {
                                s_id: children?.s_id,
                                register_id: children?._id,
                                name: children?.name,
                                img: children?.img,
                                exam: data.exam,
                                clstitle: data.clstitle,
                                yr: data.year_v,
                                markshet: url,
                                Bangla: data.bangla,
                                English: data.english,
                                Mathematics: data.mathematics,
                                status: "pending",
                                addedby: userdetail?.name,
                                viewed: "no"
                            }
                        }
                        else if (data.clstitle === "Class 3" || data.clstitle === "Class 4" || data.clstitle === "Class 5") {
                            result = {
                                s_id: children?.s_id,
                                register_id: children?._id,
                                name: children?.name,
                                img: children?.img,
                                exam: data.exam,
                                clstitle: data.clstitle,
                                yr: data.year_v,
                                markshet: url,
                                Bangla: data.bangla,
                                English: data.english,
                                Mathematics: data.mathematics,
                                bgs: data.bgstudies,
                                rgs: data.religion,
                                gs: data.gscience,
                                status: "pending",
                                viewed: "no"

                            }
                        }

                        fetch('http://localhost:5000/result', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json',
                            },
                            body: JSON.stringify(result)
                        })
                            .then(res => res.json())
                            .then(data => {
                                setLoad(false)
                                if (data.success) {
                                    toast.success("Result added successfully");
                                    reset();
                                }
                                else {
                                    reset();
                                    toast.error("This result already exist")
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
        <div className='py-16 w-full shadow-lg border border-accent rounded-md px-8 flex flex-row'>

            <div className='width-c-form1'>
                <form onSubmit={handleSubmit(onSubmit)} className="px-5 text-start">
                    <p className='md:text-start md:pl-8 md:mb-5'><i>Note: please select class to get all options</i></p>
                    <div className='flex md:flex-row flex-col w-full'>
                        <div className='md:w-3/6 md:px-3'>
                            {/* class */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Class</span>
                                </label>
                                <select {...register("clstitle")} className="select input-bordered w-full select-sm " onChange={handleChange}>
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
                        <div className='md:w-3/6 md:px-3'>
                            {/* years*/}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Year</span>
                                </label>
                                <select {...register("year_v")} className="select input-bordered w-full select-sm " >
                                    {
                                        years?.map(yr =>
                                            <option key={yr.indexOf} value={yr}><span className='clsopt'>{yr}</span></option>)
                                    }

                                </select>
                                <label className="label">
                                    {errors.year_v?.type === 'required' && <span className="label-text-alt text-red-500">{errors.year_v.message}</span>}
                                </label>
                            </div>
                        </div>
                        <div className='md:w-3/6 md:px-3'>
                            {/* Exam*/}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Exam</span>
                                </label>
                                <select {...register("exam")} className="select input-bordered w-full select-sm " >
                                    {
                                        exams?.map(xm =>
                                            <option key={xm.indexOf} value={xm}><span className='clsopt'>{xm}</span></option>)
                                    }

                                </select>
                                <label className="label">
                                    {errors.exam?.type === 'required' && <span className="label-text-alt text-red-500">{errors.exam.message}</span>}
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='flex md:flex-row flex-col w-full'>
                        <div className='md:w-3/6 w-full lg:px-3 md:px-2'>

                            {/* ----Bangla------- */}

                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bangla</span>
                                </label>
                                <input type="number" placeholder="Enter Mark" className="input input-bordered w-full input-sm"
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
                                <input type="number" placeholder="Enter Mark" className="input input-bordered w-full input-sm"
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
                                        <input type="number" placeholder="Enter Mark" className="input input-bordered w-full input-sm"
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
                                        <input type="number" placeholder="Enter Mark" className="input input-bordered w-full input-sm"
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
                        <div className='md:w-3/6 w-full lg:px-3 md:px-2'>
                            {/* ---- English------- */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">English</span>
                                </label>
                                <input type="number" placeholder="Enter Mark" className="input input-bordered w-full input-sm"
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
                                        <input type="number" placeholder="Enter Mark" className="input input-bordered w-full input-sm"
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
                                <label for="inputTagfile1">
                                    <input id="inputTagfile1" onChange={handleChangeimg} type="file" className='file-input file-input-bordered file-input-md w-full' required />
                                    <br />

                                </label>

                            </div>

                            <div className='md:mt-1'>
                                {
                                    sclass === "Class 3" || sclass === "Class 4" || sclass === "Class 5" ? <input className='btn btn-block btn-sm btn-primary md:mt-12 ' value="Add Result" type="submit" /> : <></>
                                }
                            </div>

                        </div>

                    </div>

                    <div className=' w-full lg:px-3 md:px-2'>
                        {
                            sclass === "" || sclass === "Class 1" || sclass === "Class 2" ? <input className='btn btn-block btn-primary md:mt-2 btn-sm' value="Add Result" type="submit" /> : <></>
                        }

                    </div>

                </form>
                {loadspin ? <Loader></Loader> : <></>}
            </div>
            <div className='width-c-form2'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={children?.img} alt="" />

                    </div>

                </div>
                <h1 className='mt-1 font-bold text-primary text-xl'>{children?.name}</h1>

                <p className='mt-1 text-sm font-semibold text-secondary '>{children?.clstitle}  |   ID: {children?.s_id}</p>
                <button className="btn btn-xs btn-primary mt-2">View Details</button>
            </div>
        </div>
    );
};

export default ResultForm;