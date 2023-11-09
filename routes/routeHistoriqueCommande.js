import { Router } from "express";


const router=Router()

//Importer les controllers

import { creerHistoriqueCommande, historiqueCommandePagination, lireHistoriqueCommande, mettreAJourHistoriqueCommande, supprimerHistoriqueCommande } from '../controllers/historiqueCommandes.js';



// Créer un historique de commande
router.post('/historique-commandes', creerHistoriqueCommande)
      .get('/historique-commandes/:id', lireHistoriqueCommande)
      .put('/historique-commandes/:id', mettreAJourHistoriqueCommande)

      .delete('/historique-commandes/:id', supprimerHistoriqueCommande)

      // Liste des historiques de commande avec pagination et des variables de requte
      .get('/historique-commandes', historiqueCommandePagination);

export default router;
