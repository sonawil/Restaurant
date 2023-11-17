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
        // Récupérer les paramètres de pagination depuis la requête
        const page = parseInt(req.query.page) || 1; // Page par défaut: 1
        const limit = parseInt(req.query.limit) || 10; // Limite par défaut: 10 commandes par page

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * limit;

        // Utiliser Sequelize pour récupérer les commandes paginées
        const commandes = await Commande.findAndCountAll({
            offset,
            limit
        });

        // Répondre avec les commandes paginées
        res.status(200).json({ commandes });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(404).json({ error: error.message });
    }
};


