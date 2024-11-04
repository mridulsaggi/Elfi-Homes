import { customer } from "../models/customerschema.js";

const addcustomer = async (req, res) => {
    const { name, email, status, other, address, bill, phone } = req.body;
    const newcustomer = await customer.create({ name, email, status, additonalInfo:other, phoneNumber: phone, BillNumber: bill, address });
    if (newcustomer) {
        res.status(200).json({ message: "Customer addded successfully" })
    }
    else {
        res.json({ error: "Internal server error" });
    }
}

export default addcustomer