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

export async function LoginUser(req, res) {
    const {email, password} = req.body;

    try {
        
        if (!email || !password) {
            return res.status(401).json({
                message: "Email e Senha são obrigatórios!"
            });
        }
        
        const {data: user, error} = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single()
    
        if (!user) {
            return res.status(401).json({
                message: "Email ou Senha inválida"
            })
        }
    
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        )
    
        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: "Email ou Senha inválida!"
            })
        }

        const token = jwt.sign(
            {
                id: user.id,
                email: user.email
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "4h"
            }
        );
        
        return res.status(201).json({
            message: "Login realizado com sucesso!",
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Erro interno no servidor",
            error: error.message
        });
        
    }
}

export async function Getprofile(req, res) {
    try {

        const userId = req.user.id;

        const { data: user, error } = await supabase
            .from("users")
            .select("id, name, email")
            .eq("id", userId)
            .single();

        if (error || !user) {
            return res.status(404).json({
                message: "Usuário não encontrado!"
            });
        }

        return res.status(200).json(user);
        
    } catch (error) {
        return res.status(500).json({
            message: "Erro interno no servidor",
            error: error.message
        });
    }
}

export async function UpdateUser(req, res) {
    try {
        
        const userId = req.user.id;
        const { name, email, password } = req.body;

        const updateData = {};

        if (name) updateData.name = name;
        if (email) updateData.email = email;

        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        const { data, error } = await supabase
        
            .from("users")
            .update(updateData)
            .eq("id", userId)
            .select("id, name, email")
            .single();

        if (error) {
            return res.status(500).json({
                message: "Erro ao atualizar usuário",
                error
            });
        }

        return res.status(200).json({
            message: "Usuário atualizado com sucesso!",
            user: data
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno no servidor",
            error: error.message
        });
    }
}

export async function DeleteUser(req, res) {
    try {
        
        const userId = req.user.id;

        const { error } = await supabase
            .from("users")
            .delete()
            .eq("id", userId);

        if (error) {
            return res.status(500).json({
                message: "Erro ao deletar usuário",
                error
            });
        }

        return res.status(200).json({
            message: "Usuário deletado com sucesso!"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Erro interno no servidor",
            error: error.message
        });
    }
    
}