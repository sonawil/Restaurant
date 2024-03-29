//Importer le model commande (la table)
import { Commande } from "../models/index.js";




export const creerCommande = async (req, res) => {
    try {
        const nouvelleCommande = await Commande.create(req.body);
        res.status(201).json({ data: nouvelleCommande });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireCommande = async (req, res) => {
    const commandeId = req.params.id;
    try {
        const commande = await Commande.findByPk(commandeId);
        if (!commande) {
            res.status(404).json({ error: "Commande non trouvée" });
        } else {
            res.status(200).json({ data: commande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourCommande = async (req, res) => {
    const commandeId = req.params.id;
    try {
        const commande = await Commande.findByPk(commandeId);
        if (!commande) {
            res.status(404).json({ error: "Commande non trouvée" });
        } else {
            await commande.update(req.body);
            res.status(200).json({ data: commande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerCommande = async (req, res) => {
    const commandeId = req.params.id;
    try {
        const commande = await Commande.findByPk(commandeId);
        if (!commande) {
            res.status(404).json({ error: "Commande non trouvée" });
        } else {
            await commande.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listeCommandes = async (req, res) => {

    try {
        const result = await Commande.findAll()

        res.status(200).json({ data: result })

    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

export const commandePagination = async (req, res) => {
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
      })
    }
