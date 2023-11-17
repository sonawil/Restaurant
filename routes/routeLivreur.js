import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerLivreur, lireLivreur, mettreAJourLivreur, supprimerLivreur, listerLivreurs } from '../controllers/livreur.js';



// Créer un livreur
router.post('/', creerLivreur)
      .get('/:id', lireLivreur)
      .put('/:id', mettreAJourLivreur)
      .delete('/:id', supprimerLivreur)
      .get('/', listerLivreurs)

export default router;
