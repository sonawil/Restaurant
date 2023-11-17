import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerEtatCommande, lireEtatCommande, mettreAJourEtatCommande, supprimerEtatCommande, listerEtatCommande } from '../controllers/etatCommande.js';



// Créer un état de commande
router.post('/', creerEtatCommande)
      .get('/:id', lireEtatCommande)
      .put('/:id', mettreAJourEtatCommande)
      .delete('/:id', supprimerEtatCommande)
      .get('/',listerEtatCommande)

export default router;
