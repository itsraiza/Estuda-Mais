import express from "express"
import { Estudo } from "../controllers/EstudoController.js"

const router = express.Router();

router.post('/', Estudo)

export default router;