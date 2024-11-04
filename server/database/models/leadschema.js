import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    // Any additional fields can be added as needed, or use `{ strict: false }` for flexibility
}, { strict: false });

const lead = mongoose.model('Lead', leadSchema);
export default lead;