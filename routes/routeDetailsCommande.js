import { Router } from "express";

const router=Router()

//Importer les controllers
import { creerDetailCommande, lireDetailCommande, mettreAJourDetailCommande, supprimerDetailCommande,listerDetailsCommande } from '../controllers/detailsCommande.js';



// Créer un détail de commande
router.post('/', creerDetailCommande)
      .get('/:id', lireDetailCommande)
      .put('/:id', mettreAJourDetailCommande)
      .delete('/:id', supprimerDetailCommande)
      .get('/',listerDetailsCommande)

export default router;



