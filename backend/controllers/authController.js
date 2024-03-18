import User from "../models/userModel.js";
import bcrypt from "bcrypt"
import generateJWTSetCookie from "../utils/generateJWT.js";


export const signupUser = async (req,res)=>{
    try {
        const {fullName, userName, password , confirmPassword, gender} = req.body

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        

        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }
        
        const user = await User.findOne({userName});
        if(user){
            return res.status(400).json({error:"username already exists"})
        }
        

        // hash password
        const boyProfilePic =`https://avatar.iran.liars.run/public/boy?username=${userName}`
        const girlProfilePic =`https://avatar.iran.liars.run/public/girl?username=${userName}`

        const newUser = new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic: gender === "male"? boyProfilePic:girlProfilePic
        })
    if(newUser){
         generateJWTSetCookie(newUser._id,res )
        await newUser.save();
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
         })
    }else {
        res.status(400).json({error:"Invalid data"})
    }

    

    } catch (error) {
        console.log(`error in sign up controller `, error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export const loginUser = async (req,res)=>{
    try {
        const {userName, password} = req.body;

        const user = await User.findOne({userName})
        // console.log(user)

      
        if(!user){
            return res.status(400).json({error:"username does not exist"})
        }
        
        const matchPass = await bcrypt.compare(password, user?.password || "");
        if(!matchPass){
            res.status(400).json({error:"password is not matched"})
        }
        generateJWTSetCookie(user._id,res )
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            profilePic:user.profilePic
        })


    } catch (error) {
        console.log(`error in login controller `, error.message)
        res.status(500).json({error:"Internal server error"})
        
    }
}
export const logoutUser =(req,res)=>{
try {
    res.cookie("jwt", "", {maxAge:0})
    res.status(200).json({message:"logout successfully"})
} catch (error) {
    console.log(`error in logout controller `, error.message)
    res.status(500).json({error:"Internal server error"})
    
}
   
}
