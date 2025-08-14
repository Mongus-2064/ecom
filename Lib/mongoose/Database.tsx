import mongoose from "mongoose"

export const dbconnection = async ()=>{
try {
    await mongoose.connect(process.env.MONGOURL as string);
    console.log("Database Connected ✅")
    
} catch (error) {
    console.log(error)
}}