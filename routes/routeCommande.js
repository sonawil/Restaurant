import { Router } from "express";

const router=Router()

//Importer les controllers
import { listeCommandes, creerCommande, lireCommande, mettreAJourCommande, supprimerCommande } from '../controllers/commande.js';

router.get('/', listeCommandes)

//Definition des routes

//router.get('/',verifierLogin, listeCommandes)

// Liste des commandes
router.get('/commandes', listeCommandes);

// Créer une commande
router.post('/commandes', creerCommande);

// Lire une commande par ID
router.get('/commandes/:id', lireCommande);

// Mettre à jour une commande par ID
router.put('/commandes/:id', mettreAJourCommande);

// Supprimer une commande par ID
router.delete('/commandes/:id', supprimerCommande);

export default router






