import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import DonutChart from 'react-donut-chart';
import { toast } from "react-hot-toast"
import Bchart from './chart';
const Allusers = () => {
    const [users, setusers] = useState([]);
    const [category, setcategory] = useState("all");
    const [delete_lead, setdelete_lead] = useState();
    const [loading, setloading] = useState(false);
    const [loadingCard, setLoadingCard] = useState(null); // Track loading card by its ID
    // const allcategories = ['all', 'initial', 'contact', 'future', 'complete'];
    const categories = async () => {
        // console.log(category)
        const { data } = await axios.post("http://www.localhost:5000/category", {
            category
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
        // console.log(data)
        setusers(data)
    }
    useEffect(() => {
        categories();
    }, [category])

    const sendemail = async (name, email, id) => {
        setLoadingCard(id); // Set the loading card ID
        setloading(true);
        try {
            const { data } = await axios.post("https://el-fi-automation.onrender.com/send-email", {
                name, receiver_email: email, response: "Yes"
            }, {
                headers: {
                    "Content-Type": "application/json",
                },
                // withCredentials: true, giving cors error for ai api
            })
            console.log(data);
            setloading(false);
            toast.success("email sent successfully :)")

        } catch (error) {
            setloading(false);
            console.log(error)
            console.log(error.response.data.detail);
            toast.error(error.response.data.detail)
        } finally {
            setLoadingCard(null); // Reset loading card ID after email is sent
        }



    }
    // useEffect(() => {
    //     deletelead();
    // }, [setdelete_lead])

    // const deletelead=async(e)=>{
    //     e.preventDefault();
    //     const leadid=delete_lead;
    //     console.log(leadid)
    //     const {data}=await axios.post("http://www.localhost:5000/deletelead",{
    //         leadid
    //       }, {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         withCredentials: true,
    //       })
    //       console.log(data);
    // }

    return (
        <div>
            {/* <DonutChart
                data={[
                    {
                        label: 'Contact',
                        value: 25,
                    },
                    {
                        label: 'Initial',
                        value:10,
                    },
                    {
                        label: 'Future',
                        value: 35,
                    },
                    {
                        label: 'Complete',
                        value: 30,
                        // isEmpty: true,
                    },
                ]}
            /> */}
            <div className='flex w-[100%] items-center justify-around text-2xl my-3'>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e) => { setcategory(e.target.innerHTML.toLowerCase()) }}>All</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e) => { setcategory(e.target.innerHTML.toLowerCase()) }}>Initial</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e) => { setcategory(e.target.innerHTML.toLowerCase()) }}>Contact</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e) => { setcategory(e.target.innerHTML.toLowerCase()) }}>Future</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e) => { setcategory(e.target.innerHTML.toLowerCase()) }}>Complete</div>
            </div>
            <div className='w-[70%] mx-auto mt-[5rem] flex'>
                <Bchart />
            </div>
            {
                users?.length == 0 ? <div className='min-h-screen text-3xl font-bold text-center my-[4rem]'>No Lead found with this status</div> :
                    <div className="main grid grid-cols-3 gap-[3rem] w-[90%] mx-auto my-[4rem]">
                        {users?.map((e) => (
                            // <div className="card" onClick={()=>{setdelete_lead(e._id)}}>
                            <div className="card" >
                                <div className="card bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <h2 className="card-title">{e.name}</h2>
                                        <h6>{e.email}</h6>
                                        <h6>{e.status}</h6>
                                        <h6>{e.description}</h6>
                                        <p>{e.message}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Contact</button>
                                            <button className="btn btn-primary" onClick={() => sendemail(e.name, e.email, e._id)} disabled={loadingCard === e._id}>
                                                {loadingCard === e._id ? (
                                                    <span class="loading loading-dots loading-sm"></span>
                                                ) : (
                                                    'Send Email')
                                                }
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}

export default Allusers
