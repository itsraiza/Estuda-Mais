import express from "express"
import { CriarPlano } from "../controllers/PlanoController.js"

const router = express.Router();

router.post('/', CriarPlano)

export default router;