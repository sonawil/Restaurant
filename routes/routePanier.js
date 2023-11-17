import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerPanier, lirePanier, mettreAJourPanier, supprimerPanier,listePaniers } from '../controllers/panier.js';


// Créer un panier
router.post('/', creerPanier)
      .get('/:id', lirePanier,listePaniers)
      .put('/:id', mettreAJourPanier)
      .delete('/:id', supprimerPanier)
      .get('/',listePaniers)

export default router;
