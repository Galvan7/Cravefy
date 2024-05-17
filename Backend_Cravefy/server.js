import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/FoodRoute.js'

//app config
const app=express()
const port=4000

//middleware
app.use(cors())
app.use(express.json())

//db connection
connectDB();

//apiendpoint
app.use("/api/food",foodRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})
app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
})

//mongodb+srv://amangoswami2k3:hackmeifucan@cluster0.6ungdzs.mongodb.net/?

