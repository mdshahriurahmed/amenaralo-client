import React from 'react';
import "../WhatWeDoMain/WhatWeDoMain.css"
import "../CommonCSS/CommonStyle.css"
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';
import "../Dashboard/AddResult/ResultForm.css"
import "./Analyticsview.css"

const AnalyticsView = () => {
    const { id } = useParams();
    const [children, setChildren] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        fetch(`https://amenaralo-server.vercel.app/view-a-result?id=${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                setLoad(false)
                setChildren(data)
            })

    }, [])


    var thisChild = children?.filter(function (ch) {
        return ch.register_id === id;
    });

    var childcls1 = thisChild?.filter(function (ch) {
        return ch.clstitle === "Class 1";
    });
    var childcls2 = thisChild?.filter(function (ch) {
        return ch.clstitle === "Class 2";
    });

    let newchildcls1 = childcls1.map(obj => {
        return {

            Bangla: obj.Bangla,
            English: obj.English,
            Mathematics: obj.Mathematics,
            Exam: obj.exam
        }
    })
    let newchildcls2 = childcls2.map(obj => {
        return {

            Bangla: obj.Bangla,
            English: obj.English,
            Mathematics: obj.Mathematics,
            Exam: obj.exam
        }
    })


    return (
        <div className='mt-16 mb-32'>
            {
                load ? <Loader></Loader> :
                    <div>
                        <div >
                            <div className=' banner-content-we w-full banner-content-all'>
                                <div className='hero-overlay bg-opacity-60 w-full h-full flex flex-col items-center justify-center md:px-28 px-8 '>
                                    <h1 className='text-primary lg:text-7xl md:text-5xl text-4xl mb-2'> <b>Analytics</b> </h1>
                                    <p className='text-accent lg:leading-6 md:leading-5 text-xs lg:text-lg md:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio reprehenderit illum odit corporis dolorum, pariatur voluptatum cum nobis aliquam in aliquid quos impedit necessitatibus quibusdam natus inventore optio nostrum id?
                                    </p>
                                </div>
                            </div>
                            <div className='mt-8 md:mt-28  md:px-16 px-6 flex flex-col-reverse md:flex-row text-start' >
                                <div className='width-c-form3 gridgraph'>
                                    {
                                        childcls1.length !== 0 ?
                                            <div className='class1grph'>
                                                <h1 className='text-center font-bold mb-5'>Class 1</h1>
                                                <LineChart className='lc'
                                                    width={300}
                                                    height={300}
                                                    data={newchildcls1}
                                                    margin={{
                                                        top: 5,
                                                        right: 0,
                                                        left: 0,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="Exam" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line dataKey="Bangla" stroke="#8884d8" />
                                                    <Line dataKey="English" stroke="#82ca9d" />
                                                    <Line dataKey='Mathematics' stroke="#000000" />
                                                </LineChart>
                                            </div> : <></>
                                    }
                                    {
                                        childcls2.length !== 0 ?
                                            <div className='class1grph'>
                                                <h1 className='text-center font-bold mb-5'>Class 2</h1>
                                                <LineChart
                                                    width={300}
                                                    height={300}
                                                    data={newchildcls2}
                                                    margin={{
                                                        top: 5,
                                                        right: 5,
                                                        left: 0,
                                                        bottom: 5,
                                                    }}
                                                >
                                                    <CartesianGrid strokeDasharray="3 3" />
                                                    <XAxis dataKey="Exam" />
                                                    <YAxis />
                                                    <Tooltip />
                                                    <Legend />
                                                    <Line dataKey="Bangla" stroke="#8884d8" />
                                                    <Line dataKey="English" stroke="#82ca9d" />
                                                    <Line dataKey='Mathematics' stroke="#000000" />
                                                </LineChart>
                                            </div> : <></>
                                    }



                                </div>
                                <div className='width-c-form4 flex flex-col  items-center'>

                                    <div className="avatar">
                                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={thisChild[0]?.img} alt="" />

                                        </div>

                                    </div>
                                    <h1 className='mt-1 font-bold text-primary text-xl'>{thisChild[0]?.name}</h1>

                                    <p className='mt-1 text-sm font-semibold text-secondary '>{thisChild[0]?.cclass}  |   ID: {thisChild[0]?.s_id}</p>
                                    <button className="btn btn-xs btn-primary mt-2">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>

    );
};

export default AnalyticsView;