import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerProduit, lireProduit, mettreAJourProduit, supprimerProduit } from '../controllers/produitController.js';


// Créer un produit
router.post('/produits', creerProduit);

// Lire un produit par ID
router.get('/produits/:id', lireProduit);

// Mettre à jour un produit par ID
router.put('/produits/:id', mettreAJourProduit);

// Supprimer un produit par ID
router.delete('/produits/:id', supprimerProduit);

export default router;
