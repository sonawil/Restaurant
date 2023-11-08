import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerUtilisateur, lireUtilisateur, mettreAJourUtilisateur, supprimerUtilisateur } from '../controllers/utilisateurController.js';


// Créer un utilisateur
router.post('/utilisateurs', creerUtilisateur);

// Lire un utilisateur par ID
router.get('/utilisateurs/:id', lireUtilisateur);

// Mettre à jour un utilisateur par ID
router.put('/utilisateurs/:id', mettreAJourUtilisateur);

// Supprimer un utilisateur par ID
router.delete('/utilisateurs/:id', supprimerUtilisateur);

export default router;
