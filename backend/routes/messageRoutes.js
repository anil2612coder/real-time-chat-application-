import express from "express";
import { sentMessage,getMessage } from "../controllers/messageController.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();



router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sentMessage)

export default router