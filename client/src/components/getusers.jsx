import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';

const Allusers = () => {
    const [users, setusers] = useState([]);
    const getusers = async () => {
        const { data } = await axios.get("http://www.localhost:5000/leads")
        setusers(data);
    }
    useEffect(() => {
        getusers();
    }, [])
    return (
        <div>
            {
                <div className="main grid grid-cols-3 gap-[3rem] w-[90%] mx-auto my-[4rem]">
                    {users.map((e) => (
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
