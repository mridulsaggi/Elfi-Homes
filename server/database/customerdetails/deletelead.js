import { customer } from "../models/customerschema.js";
const deletelead = async(req,res) => {
    const leadid=req.body;
    const deleteResult = await customer.deleteOne({ _id:"66843997b921e67b2377764f"});
    res.json({message:"lead deleted successfully"})
}

export default deletelead
