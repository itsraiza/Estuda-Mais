import express from "express"
import { 
    Estudo, 
    GetHistory,
    GetMessageById,
    DeleteMessage
 } from "../controllers/EstudoController.js"
import { authMiddleware } from "../middleware/AuthMiddleware.js";


const router = express.Router();

router.get("/history" , authMiddleware, GetHistory)

router.get("/history/:id", authMiddleware, GetMessageById)

router.post("/", authMiddleware, Estudo)

router.delete("/history/:id", authMiddleware, DeleteMessage)


export default router;