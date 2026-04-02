import {EstudoPrompt} from "../prompts/EstudoPrompt.js"
import { generateStreamResponse } from "../services/GeminiServices.js"

export async function Estudo(req, res) {
    const {type, message, questoes} = req.body;

    if (!type || !message) {
        return res.status(400).json({message: 'Todos os campos são obrigatórios'});
    }
    
    try {
        const prompt = EstudoPrompt(type, message, questoes);
        
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Transfer-Encoding", "chunked");

        await generateStreamResponse(prompt, res);

    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro na IA'});
    }
    
}