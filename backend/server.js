import  express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import connectToMongodb from "./db/databaseConnect.js";
import cookieParser from "cookie-parser";
import cors from "cors";



const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000



connectToMongodb()
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)
app.use("/api/users", userRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
