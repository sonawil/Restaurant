
import { Router } from "express";


const router=Router()

//Importer les controllers

import { creerProduit, lireProduit, mettreAJourProduit, produitPagination, supprimerProduit } from '../controllers/produit.js';
import Produit from "../models/Produit.js";





// Créer un produit
router.post('/produits', creerProduit);

// Lire un produit par ID
router.get('/produits/:id', lireProduit);

// Mettre à jour un produit par ID
router.put('/produits/:id', mettreAJourProduit);

// Supprimer un produit par ID
router.delete('/produits/:id', supprimerProduit);

// Liste des produits avec pagination et des variables de requete
router.get('/produits', produitPagination);
export default router;

