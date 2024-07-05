import express from "express";
import addcustomer from "../customerdetails/addcustomer.js";
import getcustomers from "../customerdetails/getcustomers.js";
const customerroute=express.Router();


customerroute.get("/leads",getcustomers)
customerroute.post("/addlead",addcustomer)

export default customerroute;