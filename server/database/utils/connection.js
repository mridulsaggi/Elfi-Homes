import mongoose from "mongoose"

export const connection=()=>{

    const connect=async()=>{
        await mongoose.connect("mongodb://localhost:27017",{dbName:"elfi"}).then(()=>{
            console.log("database connected successfully:)")
        }).catch((e)=>{
            console.log("error while connecting to the database:(",e);
        })
    }
    connect();

}