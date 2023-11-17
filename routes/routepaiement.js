import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerPaiement, lirePaiement, mettreAJourPaiement, supprimerPaiement, listerPaiements } from '../controllers/paiement.js';


// Créer un paiement
router.post('/', creerPaiement)
      .get('/:id', lirePaiement)
      .put('/:id', mettreAJourPaiement)
      .delete('/:id', supprimerPaiement)
      .get('/',listerPaiements)

export default router;
