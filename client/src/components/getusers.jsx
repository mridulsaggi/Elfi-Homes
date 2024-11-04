import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { toast } from "react-hot-toast"

const Allusers = () => {
    const [users, setUsers] = useState([]);
    const [category, setCategory] = useState("all");
    const [loading, setLoading] = useState(false);
    const [loadingCard, setLoadingCard] = useState(null); // Track loading card by its ID

    const categories = async () => {
        const { data } = await axios.post("http://www.localhost:5000/category", {
            category
        }, {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        });
        setUsers(data);
    }

    useEffect(() => {
        categories();
    }, [category]);

    const sendEmail = async (name, email, id) => {
        setLoadingCard(id);
        setLoading(true);
        try {
            const { data } = await axios.post("https://el-fi-automation.onrender.com/send-email", {
                name, receiver_email: email, response: "Yes"
            }, {
                headers: { "Content-Type": "application/json" },
            });
            toast.success("Email sent successfully :)");
        } catch (error) {
            toast.error("Failed to send email");
        } finally {
            setLoading(false);
            setLoadingCard(null);
        }
    }

    const deleteUser = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (!isConfirmed) return; // If user cancels, exit the function

        try {
            await axios.post("http://www.localhost:5000/deletelead", { leadid: id }, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            setUsers(users.filter((user) => user._id !== id));
            toast.success("User deleted successfully");
        } catch (error) {
            toast.error("Failed to delete user");
        }
    };

    return (
        <div>
            <div className='flex w-full items-center justify-around text-2xl my-3'>
                {['All', 'Initial', 'Contact', 'Future', 'Complete'].map((cat) => (
                    <div key={cat} className='bg-slate-400 w-40 text-center rounded-md text-white cursor-pointer'
                        onClick={() => setCategory(cat.toLowerCase())}>
                        {cat}
                    </div>
                ))}
            </div>
            {users.length === 0 ? (
                <div className='min-h-screen text-3xl font-bold text-center my-20'>No Lead found with this status</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto my-16">
                    {users.map((user) => (
                        <div key={user._id} className="bg-white shadow-lg rounded-lg p-6">
                            <div className="card-body">
                                <h2 className="card-title text-2xl font-bold mb-2">{user.name}</h2>
                                <div className="text-gray-700">
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Status:</strong> <span className="text-blue-600">{user.status}</span></p>
                                    <p><strong>Phone:</strong> {user.phoneNumber}</p>
                                    <p><strong>Bill Number:</strong> {user.BillNumber}</p>
                                    <p><strong>Address:</strong> {user.address}</p>
                                    <p><strong>Additional Info:</strong> {user.additionalInfo || "N/A"}</p>
                                </div>
                                <div className="card-actions mt-4 flex justify-end space-x-3">
                                    <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>Delete User</button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => sendEmail(user.name, user.email, user._id)}
                                        disabled={loadingCard === user._id}
                                    >
                                        {loadingCard === user._id ? (
                                            <span className="loading loading-dots loading-sm"></span>
                                        ) : 'Send Email'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Allusers;
