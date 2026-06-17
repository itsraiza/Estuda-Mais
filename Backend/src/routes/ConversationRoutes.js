import express from "express"
import { 
    CreateConversation,
    GetConversations,
    GetConversationById,
    DeleteConversation

 } from "../controllers/ConversationController.js"
import { authMiddleware } from "../middleware/AuthMiddleware.js";


const router = express.Router();

router.post("/", authMiddleware, CreateConversation);

router.get("/" , authMiddleware, GetConversations)

router.get("/:id", authMiddleware, GetConversationById);

router.delete("/:id", authMiddleware, DeleteConversation)

export default router;