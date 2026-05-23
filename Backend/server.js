import dotenv from 'dotenv'
dotenv.config();

import express from 'express'
import cors from 'cors'

import PlanoRoutes from './src/routes/PlanoRoutes.js'
import EstudoRoutes from './src/routes/EstudoRoutes.js'
import UserRoute from './src/routes/UserRoutes.js'


const app = express();

app.use(express.json());
app.use(cors({origin: "*"}));

app.use('/plano' , PlanoRoutes);
app.use('/estudo', EstudoRoutes);
app.use('/users', UserRoute)

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});