import jwt from "jsonwebtoken"
import User from "../models/userModel.js";


const protectRoute = async (req, res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.staus(401).json({error:"Unauthorized - No token Provided"})
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded){
            return res.status(401).json({error:"Unauthorized or Invalid token "})
        }
        
        const user = await User.findById(decoded.userId).select("-password")
        if(!user){
            return res.status(400).json({messsage:"User mot found"})
        }
        req.user = user
        next()

    } catch (error) {
        console.log("error in protected route",error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
export default protectRoute