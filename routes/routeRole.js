import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerRole, lireRole, mettreAJourRole, supprimerRole } from '../controllers/role.js';



// Créer un rôle
router.post('/roles', creerRole);

// Lire un rôle par ID
router.get('/roles/:id', lireRole);

// Mettre à jour un rôle par ID
router.put('/roles/:id', mettreAJourRole);

// Supprimer un rôle par ID
router.delete('/roles/:id', supprimerRole);

export default router;
