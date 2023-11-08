import { Router } from "express";
import HistoriqueCommande from '../models/HistoriqueCommandes.js'; // Importe le modele HistoriqueCommandes
const router = Router();

// Créer un historique de commande
router.post('/historique-commandes', creerHistoriqueCommande);

// Lire un historique de commande par ID
router.get('/historique-commandes/:id', lireHistoriqueCommande);

// Mettre à jour un historique de commande par ID
router.put('/historique-commandes/:id', mettreAJourHistoriqueCommande);

// Supprimer un historique de commande par ID
router.delete('/historique-commandes/:id', supprimerHistoriqueCommande);

// Liste des historiques de commande avec pagination et des variables de requte
router.get('/historique-commandes', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 

  /// Utiliser "Commande" pour faire une requete de base de donnees avec pagination

  HistoriqueCommande.findAndCountAll({
    offset: (page - 1) * limit,
    limit: limit,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Une erreur s\'est produite' });
    });
});

export default router;
