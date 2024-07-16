import express from "express";
import addcustomer from "../customerdetails/addcustomer.js";
import getcustomers from "../customerdetails/getcustomers.js";
import categorycustomer from "../customerdetails/categorycustomer.js";
const customerroute=express.Router();


customerroute.get("/leads",getcustomers)
customerroute.post("/addlead",addcustomer)
customerroute.post("/category",categorycustomer)

export default customerroute;