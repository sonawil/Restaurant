import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'

// Importation des routes
import routeCommande from './routes/routeCommande.js';
import routeDetailsCommande from './routes/routeDetailsCommande.js';
import routeEtatCommande from './routes/routeEtatCommande.js';
import routeHistoriqueCommande from './routes/routeHistoriqueCommande.js';
import routeHistoriqueLivraison from './routes/routeHistoriqueLivraison.js';
import routeLivraison from './routes/routeLivraison.js';
import routeLivreur from './routes/routeLivreur.js';
import routePaiement from './routes/routePaiement.js';
import routePanier from './routes/routePanier.js';
import routeProduit from './routes/routeProduit.js';
import routeRole from './routes/routeRole.js';
import routeUtilisateur from './routes/routeUtilisateur.js';

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
