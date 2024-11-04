import mongoose from "mongoose"

export const connection=()=>{

    const connect=async()=>{
        await mongoose.connect(process.env.databaseurl,{dbName:"elfi"}).then(()=>{
            console.log("database connected successfully:)")
        }).catch((e)=>{
            console.log("error while connecting to the database:(",e);
        })
    }
    connect();

}