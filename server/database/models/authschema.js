import mongoose from "mongoose";

const authschema=mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const userauth=new mongoose.model("userauth",authschema);
export default userauth;