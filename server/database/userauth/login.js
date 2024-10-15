import userauth from "../models/authschema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const login=async(req,res)=>{
    const {email,password}=req.body;
    const user=await userauth.findOne({email:email});
    if(user){
        const passwordmatched=await bcrypt.compare(password,user.password)
        if(passwordmatched){
            const hashedid=await jwt.sign({id:user._id},"abcdefghijklmnop");
            res.cookie("token",hashedid,{
                httpOnly: true,
                secure:true,
                sameSite:"None",
                expires:new Date(Date.now()+60*1000*60*2)
            })
            res.status(200).json({message:"User logedin successfully"})
        }
        else{
            res.status(500).send({error:"Invalid password"})
        }
    }
    else{
        res.status(500).send({error:"no user exists with this emailId"})
    }

}

export default login;