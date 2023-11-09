import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerPanier, lirePanier, mettreAJourPanier, supprimerPanier } from '../controllers/panier.js';


// Créer un panier
router.post('/paniers', creerPanier);

// Lire un panier par ID
router.get('/paniers/:id', lirePanier);

// Mettre à jour un panier par ID
router.put('/paniers/:id', mettreAJourPanier);

// Supprimer un panier par ID
router.delete('/paniers/:id', supprimerPanier);

export default router;
