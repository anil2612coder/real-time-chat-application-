
export const signupUser = async (req,res)=>{
    try {
        const {fullName, usernamme, password , confirmPassword, gender} = req.body
    } catch (error) {
        
    }
}
export const loginUser =(req,res)=>{
    console.log("login user")
}
export const logoutUser =(req,res)=>{
    console.log("logout user")
   
}
