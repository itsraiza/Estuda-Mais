import {EstudoPrompt} from "../prompts/EstudoPrompt.js"
import { generateStreamResponse } from "../services/GeminiServices.js"
import { supabase } from "../config/supabase.js";

export async function Estudo(req, res) {
    const {type, message, questoes} = req.body;
    const userId = req.user.id;

    if (!type || !message) {
        return res.status(400).json({message: 'Todos os campos são obrigatórios'});
    }
    
    try {
        const prompt = EstudoPrompt(type, message, questoes);

        const { data: savedMessage, error } = await supabase
            .from("messages")
            .insert([
                {
                user_id: userId,
                type,
                question: message,
                },
            ])
            .select()
            .single();

        if (error) {
        throw error;
        }
        
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Transfer-Encoding", "chunked");

        const aiResponse = await generateStreamResponse(prompt, res);

        const {error: updateError} = await supabase
            .from("messages")
            .update({
                answer: aiResponse,
            })
            .eq("id", savedMessage.id);


    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Erro na IA'});
    }
    
}

export async function GetHistory(req, res) {
    try {

        const userId = req.user.id;

        const { data, error } = await supabase
            .from("messages")
            .select(`
                id,
                type,
                question,
                answer,
                created_at
            `)
            .eq("user_id", userId)
            .order("created_at", { ascending: false });

        if (error) {
            return res.status(500).json({
                message: "Erro ao buscar histórico",
                error
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
}

export async function GetMessageById(req, res) {
    try {

        const userId = req.user.id;
        const { id } = req.params;

        const { data, error } = await supabase
            .from("messages")
            .select(`
                id,
                type,
                question,
                answer,
                created_at
            `)
            .eq("id", id)
            .eq("user_id", userId)
            .single();

        if (error || !data) {
            return res.status(404).json({
                message: "Mensagem não encontrada"
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
}

export async function DeleteMessage(req, res) {
    try {

        const userId = req.user.id;
        const { id } = req.params;

        const {data: message, error: findError } = await supabase
            .from("messages")
            .delete()
            .eq("id", id)
            .eq("user_id", userId);

        if (!message) {
            return res.status(404).json({
                message: "Mensagem não encontrada"
            });
        }

        if (error) {
            return res.status(500).json({
                message: "Erro ao excluir mensagem",
                error
            });
        }

        return res.status(200).json({
            message: "Mensagem removida com sucesso"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
}