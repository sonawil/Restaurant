import { Router } from "express";

const router=Router()

//Importer les controllers
import { creerDetailCommande, lireDetailCommande, mettreAJourDetailCommande, supprimerDetailCommande } from '../controllers/detailsCommande.js';



// Créer un détail de commande
router.post('/details-commande', creerDetailCommande);

// Lire un détail de commande par ID
router.get('/details-commande/:id', lireDetailCommande);

// Mettre à jour un détail de commande par ID
router.put('/details-commande/:id', mettreAJourDetailCommande);

// Supprimer un détail de commande par ID
router.delete('/details-commande/:id', supprimerDetailCommande);

export default router;



