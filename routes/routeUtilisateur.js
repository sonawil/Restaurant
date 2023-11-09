import { Router } from "express";


const router=Router()

//Importer les controllers

import { utilisateurPagination, creerUtilisateur, lireUtilisateur, mettreAJourUtilisateur, supprimerUtilisateur } from '../controllers/utilisateur.js';





// Créer un utilisateur
router.post('/utilisateurs', creerUtilisateur);

// Lire un utilisateur par ID
router.get('/utilisateurs/:id', lireUtilisateur);

// Mettre à jour un utilisateur par ID
router.put('/utilisateurs/:id', mettreAJourUtilisateur);

// Supprimer un utilisateur par ID
router.delete('/utilisateurs/:id', supprimerUtilisateur);

// Lire la liste des utilisateurs avec pagination et des variables de requete
router.get('/utilisateurs', utilisateurPagination);

export default router;


