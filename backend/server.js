import  express from "express";
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import connectToMongodb from "./db/databaseConnect.js";


const app = express()
dotenv.config()
const PORT = process.env.PORT || 5000


connectToMongodb()

app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})
