import  express from "express";
import dotenv from "dotenv"
import authRouthes from "./routes/authRouthes.js"
import connectToMongodb from "./db/databaseConnect.js";


const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use("/api/auth", authRouthes)

app.listen(PORT, ()=>{
    connectToMongodb()
    console.log(`Server is running on port ${PORT}`)
})
