import jwt from "jsonwebtoken"
import userauth from "../models/authschema.js"
const isauth=async (req,res,next)=>{
    const {token}=req.cookies;
    if(token){
        const decoded=jwt.verify(token,"abcdefghijklmnop");
        req.user_details=await userauth.findById({_id:decoded.id});
        next();
    }
    else{
        res.status(400).send("PLEASE LOGIN FIRST")
    }

}
export default isauth