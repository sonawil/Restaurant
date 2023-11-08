import { Router } from "express";
import { creerUtilisateur, lireUtilisateur, mettreAJourUtilisateur, supprimerUtilisateur } from '../controllers/utilisateurController.js';
import Utilisateur from '../models/utilisateur.js'; // Importe le modele Utilisateur

const router = Router();

// Créer un utilisateur
router.post('/utilisateurs', creerUtilisateur);

// Lire un utilisateur par ID
router.get('/utilisateurs/:id', lireUtilisateur);

// Mettre à jour un utilisateur par ID
router.put('/utilisateurs/:id', mettreAJourUtilisateur);

// Supprimer un utilisateur par ID
router.delete('/utilisateurs/:id', supprimerUtilisateur);

// Lire la liste des utilisateurs avec pagination et des variables de requete
router.get('/utilisateurs', (req, res) => {
  const page = parseInt(req.query.page) || 1; 
  const limit = parseInt(req.query.limit) || 10; 

  // Utiliser "Utilisateur" pour faire une requete de base de donnees avec pagination

  Utilisateur.findAndCountAll({
    offset: (page - 1) * limit,
    limit: limit,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.status(500).json({ error: 'Une erreur sest produite' });
    });
});

export default router;


