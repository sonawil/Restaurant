import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerLivreur, lireLivreur, mettreAJourLivreur, supprimerLivreur } from '../controllers/livreurController.js';



// Créer un livreur
router.post('/livreurs', creerLivreur);

// Lire un livreur par ID
router.get('/livreurs/:id', lireLivreur);

// Mettre à jour un livreur par ID
router.put('/livreurs/:id', mettreAJourLivreur);

// Supprimer un livreur par ID
router.delete('/livreurs/:id', supprimerLivreur);

export default router;
