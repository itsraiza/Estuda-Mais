import {CriarPlanoPrompt} from "../prompts/CriarPlanoPrompt.js"
import { generateStreamResponse } from "../services/GeminiServices.js"

export async function CriarPlano(req, res) {
    const {goal, subjects, time, level} = req.body;

    if (!goal || !subjects || !time || !level) {
        return res.status(400).json({message: 'Todos os campos são obrigatórios'});
    }
    
    try {
        const prompt = CriarPlanoPrompt(goal, subjects, time, level);

        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Transfer-Encoding", "chunked");

        await generateStreamResponse(prompt, res);
    } catch (error) {
        res.status(500).json({error: 'Erro ao gerar plano'});
    }
    
}