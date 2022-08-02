const asyncHandler = require("express-async-handler")
const User = require("../model/userModel")
const genertetoken = require("../token/jwttoken")


const registeruser = asyncHandler(async (req,res)=>{
    const {name,email,password,role}=req.body
    const userExits = await User.findOne({email})
    if(userExits){
        res.status(400).send({message:"User Already Exit"})
    }
    const user = await User.create({
        name,email,password
    })
    if(user){
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:genertetoken(user._id)
        })
    }
    else{
        res.status(404).send({message:"Error Found!"})
        
    }
})

const authuser = asyncHandler(async (req,res)=>{
    const {email,password}=req.body
  
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:genertetoken(user._id)
        })
    }
    else{
        res.status(404).send({message:"Invalid Email Or Password"})  
    }
})

module.exports ={ registeruser,authuser}