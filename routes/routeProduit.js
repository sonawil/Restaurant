
import { Router } from "express";


const router=Router()

//Importer les controllers

import { creerProduit, lireProduit, mettreAJourProduit, supprimerProduit,listeProduits } from '../controllers/produit.js';





// Créer un produit
router.post('/', creerProduit)
      .get('/:id', lireProduit)
      .put('/:id', mettreAJourProduit)
      .delete('/:id', supprimerProduit)
      .get('/', listeProduits)
      
export default router;

