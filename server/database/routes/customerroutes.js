import express from "express";
import addcustomer from "../customerdetails/addcustomer.js";
import getcustomers from "../customerdetails/getcustomers.js";
import categorycustomer from "../customerdetails/categorycustomer.js";
import deletelead from "../customerdetails/deletelead.js";
import upload_extracted_data from "../customerdetails/extract.js";
const customerroute=express.Router();


customerroute.get("/leads",getcustomers)
customerroute.post("/addlead",addcustomer)
customerroute.post("/category",categorycustomer)
customerroute.post("/deletelead",deletelead)
customerroute.post("/upload_csv_data",upload_extracted_data)

export default customerroute;