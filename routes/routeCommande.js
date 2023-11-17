import { Router } from "express";

const router = Router();
//Importer les controllers
import { listeCommandes, creerCommande, lireCommande, mettreAJourCommande, supprimerCommande } from '../controllers/commande.js';




// Créer une commande
router.post('/', creerCommande)
      .get('/:id', lireCommande)
      .put('/:id', mettreAJourCommande)
      .delete('/:id', supprimerCommande)
      .get('/',listeCommandes)
     

export default router;
