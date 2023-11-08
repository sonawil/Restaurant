import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerEtatCommande, lireEtatCommande, mettreAJourEtatCommande, supprimerEtatCommande } from '../controllers/etatCommandeController.js';



// Créer un état de commande
router.post('/etats-commande', creerEtatCommande);

// Lire un état de commande par ID
router.get('/etats-commande/:id', lireEtatCommande);

// Mettre à jour un état de commande par ID
router.put('/etats-commande/:id', mettreAJourEtatCommande);

// Supprimer un état de commande par ID
router.delete('/etats-commande/:id', supprimerEtatCommande);

export default router;
