import User from "../models/userModel.js"

export const getUsersForSidebar = async (req,res)=>{
    try {
        const logInUserId = req.user._id

        const filterUsers = await User.find({_id:{$ne:logInUserId}}).select("-password")
        res.status(200).json(filterUsers)
        // console.log(filterUsers)
        
    } catch (error) {
        console.log("Error in user controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}