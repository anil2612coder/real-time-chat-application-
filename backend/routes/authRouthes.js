import express from "express"
import { loginUser, logoutUser, signupUser } from "../controllers/authController.js"
 const router = express.Router()

router.get("/signup",signupUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)

export default router

