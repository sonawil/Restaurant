import { Router } from "express";

const router=Router()

//Importer les controllers

import { creerHistoriqueCommande, lireHistoriqueCommande, mettreAJourHistoriqueCommande, supprimerHistoriqueCommande } from '../controllers/historiqueCommandeController.js';



// Créer un historique de commande
router.post('/historique-commandes', creerHistoriqueCommande);

// Lire un historique de commande par ID
router.get('/historique-commandes/:id', lireHistoriqueCommande);

// Mettre à jour un historique de commande par ID
router.put('/historique-commandes/:id', mettreAJourHistoriqueCommande);

// Supprimer un historique de commande par ID
router.delete('/historique-commandes/:id', supprimerHistoriqueCommande);

export default router;
