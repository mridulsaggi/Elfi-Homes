import mongoose from "mongoose";

const customerschema=mongoose.Schema({
    name:String,
    email:String,
    status:String,
    description:String,
    message:String

},{timestamps:true})

export const customer=new mongoose.model("customer",customerschema)