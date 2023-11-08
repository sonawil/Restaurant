import { Router } from "express";
import Produit from '../models/produit.js'; // Importe le modele Produit
const router = Router();

// Créer un produit
router.post('/produits', creerProduit);

// Lire un produit par ID
router.get('/produits/:id', lireProduit);

// Mettre à jour un produit par ID
router.put('/produits/:id', mettreAJourProduit);

// Supprimer un produit par ID
router.delete('/produits/:id', supprimerProduit);

// Liste des produits avec pagination et des variables de requete
router.get('/produits', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 

  // Utiliser "Produit" pour faire une requete de base de donnees avec pagination

  Produit.findAndCountAll({
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

