import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'

// Importation des routes
import routeEtudiant from './routes/routeEtudiant.js'
import routeNote from './routes/routeNote.js'

const PORT = dotenv.config().parsed.PORT

//Import de la base de donnees
import database from './connexion.js'

//Creation des tables
database.sync()

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))




app.listen(PORT, () => console.log(`Listening on Port ${PORT}`))