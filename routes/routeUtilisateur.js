import { Router } from "express";


const router=Router()

//Importer les controllers

import { listerUtilisateur, creerUtilisateur, lireUtilisateur, mettreAJourUtilisateur, supprimerUtilisateur } from '../controllers/utilisateur.js';

import { verifierLogin } from "../authentification/verifierLogin.js";



// Créer un utilisateur
router.post('/', creerUtilisateur)
      .get('/:id', lireUtilisateur)
      .put('/:id', mettreAJourUtilisateur)
      .delete('/:id', supprimerUtilisateur)
      .get('/',verifierLogin,listerUtilisateur)
      

export default router;


