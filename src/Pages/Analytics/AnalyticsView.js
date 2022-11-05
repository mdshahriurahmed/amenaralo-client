import React from 'react';
import "../WhatWeDoMain/WhatWeDoMain.css"
import "../CommonCSS/CommonStyle.css"
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect } from 'react';
import { useState } from 'react';

const AnalyticsView = () => {
    const { id } = useParams();
    const [children, setChildren] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setLoad(true)
        fetch(`http://localhost:5000/view-a-result?id=${id}`, {
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

    let newchildcls1 = childcls1.map(obj => {
        return {

            Bangla: obj.Bangla,
            English: obj.English,
            Mathematics: obj.Mathematics,
            Exam: obj.exam
        }
    })
    console.log(newchildcls1);

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
                                <div>
                                    <h1 className='text-center font-bold mb-5'>Class 1</h1>
                                    <LineChart
                                        width={400}
                                        height={300}
                                        data={newchildcls1}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
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


                                </div>
                                <div>
                                    <img src={thisChild[0]?.img} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>

    );
};

export default AnalyticsView;