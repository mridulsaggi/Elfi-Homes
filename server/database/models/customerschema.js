import mongoose from "mongoose";

const customerschema=mongoose.Schema({
    name:String,
    email:String,
    status:String,
    address:String,
    phoneNumber:Number,
    BillNumber:String,
    additionalInfo:String

},{timestamps:true})

export const customer=new mongoose.model("customer",customerschema)