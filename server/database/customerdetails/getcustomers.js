import { customer } from "../models/customerschema.js";

const getcustomers = async(req,res) => {
    const data=await customer.find({})
    res.json(data);
}

export default getcustomers
