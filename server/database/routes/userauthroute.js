import express from "express";
import login from "../userauth/login.js";
import isauth from "../userauth/isauth.js";
import signup from "../userauth/signup.js";
const userauthroute=express.Router();

userauthroute.post("/login",login)
userauthroute.post("/signup",signup)
userauthroute.get("/",isauth,signup)


export default userauthroute;