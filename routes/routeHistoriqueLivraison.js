import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerHistoriqueLivraison, lireHistoriqueLivraison, mettreAJourHistoriqueLivraison, supprimerHistoriqueLivraison,listeHistoriqueLivraisons } from '../controllers/historiqueLivraison.js';


// Créer un historique de livraison
router.post('/', creerHistoriqueLivraison)
      .get('/:id', lireHistoriqueLivraison)
      .put('/:id', mettreAJourHistoriqueLivraison)
      .delete('/:id', supprimerHistoriqueLivraison)
      .get('/', listeHistoriqueLivraisons)

export default router;
