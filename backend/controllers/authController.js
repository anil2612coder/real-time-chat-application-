import User from "../models/userModel";
import bcrypt from "bcrypt"


export const signupUser = async (req,res)=>{
    try {
        const {fullName, userName, password , confirmPassword, gender} = req.body

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }
        
        const user = await User.findOne({userName});
        if(user){
            return res.sttaus(400).json({error:"userName already exists"})
        }
        

        // hash password
        const boyProfilePic =`https://avatar.iran.liars.run/public/boy?username=${userName}`
        const girlProfilePic =`https://avatar.iran.liars.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic: gender === "male"? boyProfilePic:girlProfilePic
        })
     await newUser.save();
     res.status(201).json({
        _id:newUser._id,
        fullName:newUser.fullName,
        userName:newUser.userName,
        profilePic:newUser.profilePic
     })

    } catch (error) {
        console.log(`error in sign up controller `, error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export const loginUser =(req,res)=>{
    console.log("login user")
}
export const logoutUser =(req,res)=>{
    console.log("logout user")
   
}
