import { supabase } from "../config/supabase.js";

export async function CreateConversation(req, res) {
    try {

        const userId = req.user.id;
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                message: "O título é obrigatório!"
            });
        }

        const { data, error } = await supabase
            .from("conversations")
            .insert([
                {
                    user_id: userId,
                    title
                }
            ])
            .select()
            .single();

        if (error) {
            return res.status(500).json({
                message: "Erro ao criar conversa",
                error
            });
        }

        return res.status(201).json({
            message: "Conversa criada com sucesso!",
            conversation: data
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno no servidor",
            error: error.message
        });
    }
}

export async function GetConversations(req, res) {
    try {

        const userId = req.user.id;

        const { data, error } = await supabase
            .from("conversations")
            .select(`
                id,
                title,
                created_at
            `)
            .eq("user_id", userId)
            .order("created_at", {
                ascending: false
            });

        if (error) {
            return res.status(500).json({
                message: "Erro ao buscar conversas",
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

export async function GetConversationById(req, res) {
    try {

        const userId = req.user.id;
        const { id } = req.params;

        const { data: conversation, error: conversationError } =
            await supabase
                .from("conversations")
                .select(`
                    id,
                    title,
                    created_at
                `)
                .eq("id", id)
                .eq("user_id", userId)
                .single();

        if (conversationError || !conversation) {
            return res.status(404).json({
                message: "Conversa não encontrada"
            });
        }

        const { data: messages, error: messagesError } =
            await supabase
                .from("messages")
                .select(`
                    id,
                    type,
                    question,
                    answer,
                    created_at
                `)
                .eq("conversation_id", id)
                .order("created_at", {
                    ascending: true
                });

        if (messagesError) {
            return res.status(500).json({
                message: "Erro ao buscar mensagens",
                error: messagesError
            });
        }

        return res.status(200).json({
            conversation,
            messages
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
}

export async function DeleteConversation(req, res) {
    try {

        const userId = req.user.id;
        const { id } = req.params;

        const { data: conversation, error: findError } =
            await supabase
                .from("conversations")
                .select("id")
                .eq("id", id)
                .eq("user_id", userId)
                .single();

        if (findError || !conversation) {
            return res.status(404).json({
                message: "Conversa não encontrada"
            });
        }

        const { error } = await supabase
            .from("conversations")
            .delete()
            .eq("id", id);

        if (error) {
            return res.status(500).json({
                message: "Erro ao excluir conversa",
                error
            });
        }

        return res.status(200).json({
            message: "Conversa removida com sucesso"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno do servidor",
            error: error.message
        });
    }
}