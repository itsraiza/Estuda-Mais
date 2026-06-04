import express from "express"
import { 
    CreateUser, 
    LoginUser,
    Getprofile,
    UpdateUser,
    DeleteUser
 } from "../controllers/UserController.js"
import { authMiddleware } from "../middleware/AuthMiddleware.js";

const router = express.Router();

router.post("/register", CreateUser);

router.post("/login", LoginUser);

router.get("/profile", authMiddleware, Getprofile);

router.put("/profile", authMiddleware, UpdateUser);

router.delete("/profile", authMiddleware, DeleteUser);



export default router;
