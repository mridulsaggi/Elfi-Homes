import axios from 'axios';
import React from 'react'

const category = () => {

    const categories=async(e)=>{
        e.preventDefault();
        let category=e.target.innerHTML.toLowerCase()
        const {data}=await axios.post("http://www.localhost:5000/category",{
            category
          }, {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          })
          console.log(data);
    }

  return (
    <div className='flex w-[100%] items-center justify-around text-2xl my-3'>
      <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={categories}>Initial</div>
      <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={categories}>Contact</div>
      <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={categories}>Future</div>
      <div className='bg-slate-400 w-[10rem] text-center rounded-md text-white' onClick={categories}>Complete</div>
    </div>
  )
}

export default category
