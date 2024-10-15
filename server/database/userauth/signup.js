import userauth from "../models/authschema.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await userauth.findOne({ email: email });
    if (!user) {
        const hashedpassword=await bcrypt.hash(password,10)
        const newuser=await userauth.create({name,email,password:hashedpassword});
        const hashedid = await jwt.sign({ id: newuser._id }, "abcdefghijklmnop");
        res.cookie("token", hashedid, {
            httpOnly: true,
            secure:true,
            sameSite:"None",
            expires: new Date(Date.now() + 60 * 1000 * 60 * 2)
        })
        res.status(200).json({message:"User registered successfully"})
    }
    else {
        res.status(500).send({ error: "user already exists with this emailId" })
    }

}

export default signup;