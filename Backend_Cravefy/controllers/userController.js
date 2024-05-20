import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//login 
const loginuser = async(req,res)=>{
    const {email,password}= req.body;
    try {
        const user= await userModel.findOne({email})
        if(!user){
            return res.json({success: false, message:"User does not exist"});
        }
        const isMatch= await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.json({success: false, message:"Password is incorrect"});
        }
        const token=createToken(user._id);
        res.json({success:true,token});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
        
    }
}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}
//register
const registerUser = async(req,res)=>{
    const {name,password,email}= req.body;
    try{
        //checking existing user
        const exists= await userModel.findOne({email});
        if(exists){
            return res.json({success:false,message:"User Already Exists"})
        }
        //validating email and pass
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enter a strong password"})
        }

        //hashing user password
        const salt=await bcrypt.genSalt(8);
        const hashedPass= await bcrypt.hash(password,salt);
        const newUser= new userModel({
            name: name,
            email:email,
            password:hashedPass,
        })
        const user= await newUser.save()
        const token=createToken(user._id)
        res.json({success:true,token})

    }catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

export {loginuser, registerUser}