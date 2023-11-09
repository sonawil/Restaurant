import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerHistoriqueLivraison, lireHistoriqueLivraison, mettreAJourHistoriqueLivraison, supprimerHistoriqueLivraison } from '../controllers/historiqueLivraison.js';



// Créer un historique de livraison
router.post('/historique-livraison', creerHistoriqueLivraison);

// Lire un historique de livraison par ID
router.get('/historique-livraison/:id', lireHistoriqueLivraison);

// Mettre à jour un historique de livraison par ID
router.put('/historique-livraison/:id', mettreAJourHistoriqueLivraison);

// Supprimer un historique de livraison par ID
router.delete('/historique-livraison/:id', supprimerHistoriqueLivraison);

export default router;
