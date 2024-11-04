import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast"
const Adduser = () => {
    const [name, setname] = useState("");
    const [status, setstatus] = useState("");
    const [phone, setphone] = useState("");
    const [address, setaddress] = useState("");
    const [bill, setbill] = useState("");
    const [other, setother] = useState("");
    const [email, setemail] = useState("");
    const submithandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("http://www.localhost:5000/addlead", {
            name, email, address, other, status,bill,phone
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
        toast.success("User added successfully");

        setemail("")
        setname("")
        setbill("")
        setstatus("")
        setaddress("")
        setphone("")
        setother("")
    }

    return (
        <form action="/" onSubmit={submithandler} className='bg-slate-100 w-[60%] flex flex-col mx-auto my-[2rem] justify-center items-center'>

            <label className="w-[50%] input  input-bordered flex items-center my-[1rem]">
                <input type="text" className="grow" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            </label>
            <label className="w-[50%] input input-bordered flex items-center my-[1rem]">
                <input type="text" className="grow" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            </label>
            <label className="w-[50%] input input-bordered flex items-center my-[1rem]">
                <input type="text" className="grow" placeholder="Address" value={address} onChange={(e) => setaddress(e.target.value)} />
            </label>
            <label className="w-[50%] input input-bordered flex items-center my-[1rem]">
                <input type="number" className="grow" placeholder="Phone No." value={phone} onChange={(e) => setphone(e.target.value)} />
            </label>
            <label className="w-[50%] input input-bordered flex items-center my-[1rem]">
                <input type="text" className="grow" placeholder="status" value={status} onChange={(e) => setstatus(e.target.value)} />
            </label>
            <label className="w-[50%] input input-bordered flex items-center my-[1rem]">
                <input type="text" className="grow" placeholder="Additional Info" value={other} onChange={(e) => setother(e.target.value)} />
            </label>
            <label className="w-[50%] input input-bordered flex items-center my-[1rem]">
                <input type="text" className="grow" placeholder='Bill Number' value={bill} onChange={(e) => setbill(e.target.value)} />
            </label>
            <button className="btn btn-primary my-[2rem] w-[30%]">Add Lead</button>
        </form>
    )
}

export default Adduser