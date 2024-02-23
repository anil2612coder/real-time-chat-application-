import  express from "express";
import dotenv from "dotenv"
import authRouthes from "./routes/authRouthes.js"


const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use("/api/auth", authRouthes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
