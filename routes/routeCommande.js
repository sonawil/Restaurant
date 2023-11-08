import { Router } from "express";
import Commande from '../models/commande.js'; // Import le modele Commande
const router = Router();

// Liste des commandes avec pagination et des variables de requete
router.get('/commandes', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 

  // Utiliser "Commande" pour faire une requete de base de donnees avec pagination

  Commande.findAndCountAll({
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

// Créer une commande
router.post('/commandes', creerCommande);

// Lire une commande par ID
router.get('/commandes/:id', lireCommande);

// Mettre à jour une commande par ID
router.put('/commandes/:id', mettreAJourCommande);

// Supprimer une commande par ID
router.delete('/commandes/:id', supprimerCommande);

export default router;
