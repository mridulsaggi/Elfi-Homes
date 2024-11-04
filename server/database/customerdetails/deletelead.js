import { customer } from "../models/customerschema.js";
const deletelead = async(req,res) => {
    try {
        const { leadid } = req.body;

        // Validate input
        if (!leadid) return res.status(500).json({ detail: "Lead ID is required" });

        // Delete the lead by ID
        const result = await customer.findByIdAndDelete(leadid);
        if (!result) return res.status(500).json({ detail: "Lead not found" });

        res.json({ message: "Lead deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ detail: "An error occurred while deleting the lead" });
    }
}

export default deletelead
