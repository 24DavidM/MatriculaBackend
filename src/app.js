import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

// INICIAMOS SERVER
const app = express()
dotenv.config()


// MIDDLEWARES
app.use(express.json())

// CONFIGURAMOS
app.set('port', process.env.PORT || 3000)
app.use(cors())

// RUTAS
app.get('/', (req, res) => {
    res.send("Backend de Gestión de Estudiantes")
})



// MANEJO DE RUTAS NO ENCONTRADAS
app.use((req, res) => {
    res.status(404).send("Endpoint no encontrado")
})

export default app