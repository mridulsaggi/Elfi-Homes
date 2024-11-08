import React, { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
const Signup = () => {
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const submithandler=async(e)=>{
        e.preventDefault();
        try {
            const {data}=await axios.post("http://www.localhost:5000/signup",{
                name,email, password,
              }, {
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              })
            //   console.log(data);
              toast.success(data.message);
        } catch (error) {
            // console.log(error.response.data.error);
            toast.error(error.response.data.error);

        }
    }

    return (
        <form action="/" onSubmit={submithandler} className='bg-slate-100 w-[50%] flex flex-col mx-auto my-[10rem] justify-center items-center'>

            <label className="input input-bordered flex items-center my-[1rem]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center my-[1rem]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path
                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)} />
            </label>
            <label className="input input-bordered flex items-center my-[1rem]">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd" />
                </svg>
                <input type="password" className="grow" placeholder='Password' value={password} onChange={(e)=>setpassword(e.target.value)} />
            </label>
            <button className="btn btn-primary my-[2rem] w-[30%]">SignUp</button>
        </form>
    )
}

export default Signup
