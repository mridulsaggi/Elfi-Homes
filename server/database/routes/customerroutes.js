import express from "express";
import addcustomer from "../customerdetails/addcustomer.js";
import getcustomers from "../customerdetails/getcustomers.js";
import categorycustomer from "../customerdetails/categorycustomer.js";
import deletelead from "../customerdetails/deletelead.js";
const customerroute=express.Router();


customerroute.get("/leads",getcustomers)
customerroute.post("/addlead",addcustomer)
customerroute.post("/category",categorycustomer)
customerroute.post("/deletelead",deletelead)

export default customerroute;