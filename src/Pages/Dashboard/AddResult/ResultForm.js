import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loader from '../../Loader/Loader';
import "./ResultForm.css"

const ResultForm = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { _id } = useParams();
    const id = _id;
    const skills = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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

    const handleChange = e => {
        if (e.target.value) {
            setSclass(e.target.value)

        }

    }
    console.log(sclass);
    return (
        <div className='py-16 w-full shadow-lg border border-accent rounded-md px-8 flex flex-row'>

            <div className='width-c-form1'>
                <form onSubmit={() => console.log("sad")}>
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
                                <input type="text" placeholder="Enter Mark" className="input input-bordered w-full "
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


                            {/* ---- English------- */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">English</span>
                                </label>
                                <input type="text" placeholder="Enter Mark" className="input input-bordered w-full "
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

                            {/* ---- Mathematics------- */}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Mathematics</span>
                                </label>
                                <input type="text" placeholder="Enter Mark" className="input input-bordered w-full "
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
                        <div className='md:w-3/6 w-full lg:px-8 md:px-2'>
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



                            {/* ------ Bengali skill range ----*/}
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Bengali Skill</span>
                                </label>
                                <select {...register("bskill")} className="select input-bordered w-full  ">
                                    {
                                        skills?.map(bskill =>
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
                                        skills?.map(eskill =>
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