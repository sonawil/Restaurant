import { Router } from "express";


const router=Router()

//Importer les controllers

import { creerHistoriqueCommande, listeHistoriqueCommandes, lireHistoriqueCommande, mettreAJourHistoriqueCommande, supprimerHistoriqueCommande } from '../controllers/historiqueCommandes.js';



// Créer un historique de commande
router.post('/', creerHistoriqueCommande)
      .get('/:id', lireHistoriqueCommande)
      .put('/:id', mettreAJourHistoriqueCommande)
      .delete('/:id', supprimerHistoriqueCommande)
      .get('/', listeHistoriqueCommandes)
      

export default router;
