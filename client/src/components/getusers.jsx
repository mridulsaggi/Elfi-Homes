import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
const Allusers = () => {
    const [users, setusers] = useState([]);
    // const getusers = async () => {
    //     const { data } = await axios.get("http://www.localhost:5000/leads")
    //     setusers(data);
    // }
    const [category,setcategory]=useState("all");
    const categories=async()=>{
        console.log(category)
        const {data}=await axios.post("http://www.localhost:5000/category",{
            category
          }, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          console.log(data)
          setusers(data)
    }
    useEffect(() => {
        categories();
    }, [category])
    return (
        <div>
            <div className='flex w-[100%] items-center justify-around text-2xl my-3'>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e)=>{setcategory(e.target.innerHTML.toLowerCase())}}>All</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e)=>{setcategory(e.target.innerHTML.toLowerCase())}}>Initial</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e)=>{setcategory(e.target.innerHTML.toLowerCase())}}>Contact</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e)=>{setcategory(e.target.innerHTML.toLowerCase())}}>Future</div>
                <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={(e)=>{setcategory(e.target.innerHTML.toLowerCase())}}>Complete</div>
            </div>
            {
                users?.length==0?<div className='min-h-screen text-3xl font-bold text-center my-[4rem]'>No Lead found with this status</div>:
                    <div className="main grid grid-cols-3 gap-[3rem] w-[90%] mx-auto my-[4rem]">
                    {users?.map((e) => (
                        <div className="card">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">{e.name}</h2>
                                    <h6>{e.email}</h6>
                                    <h6>{e.status}</h6>
                                    <h6>{e.description}</h6>
                                    <p>{e.message}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Contact</button>
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
