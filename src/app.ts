import express, { Express } from 'express'
import path from 'path'
import cors from 'cors'
import routes from './modules/routes.js'
/*
 * Habilitando e Adicionando Middlewares
 */

const app: Express = express()
app.use(express.static(path.resolve('src', 'public'))) // Definindo a Pasta Public
app.use(express.json()) //Habilitando JSON  e configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }))
// Habilitando methodOverride
app.use(cors())
/**
 *Instanciando Rotas
 */
app.use(routes)

export default app
