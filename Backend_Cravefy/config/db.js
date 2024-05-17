import mongoose from "mongoose"
export const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://amangoswami2k3:hackmeifucan@cluster0.6ungdzs.mongodb.net/cravefy").then(()=>{
        console.log("Database connected");
    })

}