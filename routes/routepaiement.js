import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerPaiement, lirePaiement, mettreAJourPaiement, supprimerPaiement } from '../controllers/paiementController.js';


// Créer un paiement
router.post('/paiements', creerPaiement);

// Lire un paiement par ID
router.get('/paiements/:id', lirePaiement);

// Mettre à jour un paiement par ID
router.put('/paiements/:id', mettreAJourPaiement);

// Supprimer un paiement par ID
router.delete('/paiements/:id', supprimerPaiement);

export default router;
