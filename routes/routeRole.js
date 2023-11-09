import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerRole, lireRole, mettreAJourRole, supprimerRole } from '../controllers/role.js';



// Créer un rôle
router.post('/', creerRole);

// Lire un rôle par ID
router.get('/:id', lireRole);

// Mettre à jour un rôle par ID
router.put('/:id', mettreAJourRole);

// Supprimer un rôle par ID
router.delete('/:id', supprimerRole);

export default router;
