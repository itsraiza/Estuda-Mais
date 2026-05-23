import express from "express"
import { CreateUser, LoginUser } from "../controllers/UserController.js"
import { authMiddleware } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post('/register', CreateUser);
router.post("/login", LoginUser);


export default router;
