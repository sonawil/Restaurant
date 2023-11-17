import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerRole, lireRole, mettreAJourRole, supprimerRole,listerRoles } from '../controllers/role.js';



// Créer un rôle
router.post('/', creerRole)
      .get('/:id', lireRole)
      .put('/:id', mettreAJourRole)
      .delete('/:id', supprimerRole)
      .get('/',listerRoles)

export default router;
