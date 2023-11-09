import { Router } from "express";

const router = Router();
//Importer les controllers
import { listeCommandes, creerCommande, lireCommande, mettreAJourCommande, supprimerCommande, commandePagination } from '../controllers/commande.js';




// Créer une commande
router.post('/commandes', creerCommande)
      .get('/commandes/:id', lireCommande, listeCommandes)
      .put('/commandes/:id', mettreAJourCommande)
      .delete('/commandes/:id', supprimerCommande)
      // Liste des commandes avec pagination et des variables de requete
      .get('/commandes', commandePagination)

export default router;
