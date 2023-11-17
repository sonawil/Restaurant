import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerLivraison, lireLivraison, mettreAJourLivraison, supprimerLivraison, listerLivraisons } from '../controllers/livraison.js';



// Créer une livraison
router.post('/', creerLivraison)
      .get('/:id', lireLivraison)
      .put('/:id', mettreAJourLivraison)
      .delete('/:id', supprimerLivraison)
      .get('/', listerLivraisons)


export default router;
