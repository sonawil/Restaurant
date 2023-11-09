import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerLivraison, lireLivraison, mettreAJourLivraison, supprimerLivraison } from '../controllers/livraison.js';



// Créer une livraison
router.post('/livraisons', creerLivraison);

// Lire une livraison par ID
router.get('/livraisons/:id', lireLivraison);

// Mettre à jour une livraison par ID
router.put('/livraisons/:id', mettreAJourLivraison);

// Supprimer une livraison par ID
router.delete('/livraisons/:id', supprimerLivraison);

export default router;
