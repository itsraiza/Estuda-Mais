import { supabase } from "../config/supabase.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export async function CreateUser (req, res) {
    try {
        const {name, email, password} = req.body;
    
        if (!name || !email || !password) {
            return res.status(400).json({message: "Todos os campos são obrigatórios!"})
        }
        
        const {data: existingUser, error: findError} = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single()

        if (existingUser) {
            return res.status(400).json({
                message: "Email já cadastrado!"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const {data, error} = await supabase
        .from("users")
        .insert([
            {
                name,
                email,
                password: hashedPassword
            }
        ])
        .select();

        if (error) {
            return res.status(500).json({
                message: "Erro ao criar usuário!",
                error
            });
        }

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            user: {
                id: data[0].id,
                name: data[0].name,
                email: data[0].email
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno no servidor",
            error: error.message
        });
        
    }
}