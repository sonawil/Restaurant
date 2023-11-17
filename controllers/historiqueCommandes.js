import { HistoriqueCommandes } from "../models/index.js";

export const creerHistoriqueCommande = async (req, res) => {
    try {
        const nouvelHistoriqueCommande = await HistoriqueCommandes.create(req.body);
        res.status(201).json({ data: nouvelHistoriqueCommande });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireHistoriqueCommande = async (req, res) => {
    const historiqueCommandeId = req.params.id;
    try {
        const historiqueCommande = await HistoriqueCommandes.findByPk(historiqueCommandeId);
        if (!historiqueCommande) {
            res.status(404).json({ error: "Historique de commande non trouvé" });
        } else {
            res.status(200).json({ data: historiqueCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourHistoriqueCommande = async (req, res) => {
    const historiqueCommandeId = req.params.id;
    try {
        const historiqueCommande = await HistoriqueCommandes.findByPk(historiqueCommandeId);
        if (!historiqueCommande) {
            res.status(404).json({ error: "Historique de commande non trouvé" });
        } else {
            await historiqueCommande.update(req.body);
            res.status(200).json({ data: historiqueCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerHistoriqueCommande = async (req, res) => {
    const historiqueCommandeId = req.params.id;
    try {
        const historiqueCommande = await HistoriqueCommandes.findByPk(historiqueCommandeId);
        if (!historiqueCommande) {
            res.status(404).json({ error: "Historique de commande non trouvé" });
        } else {
            await historiqueCommande.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listeHistoriqueCommandes = async (req, res) => {
    try {
        // Récupérer les paramètres de pagination depuis la requête
        const page = parseInt(req.query.page) || 1; // Page par défaut: 1
        const limit = parseInt(req.query.limit) || 10; // Limite par défaut: 10 historiques de commandes par page

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * limit;

        // Utiliser Sequelize pour récupérer l'historique des commandes paginé
        const historiquesCommandes = await HistoriqueCommandes.findAndCountAll({
            offset,
            limit
        });

        // Répondre avec l'historique des commandes paginé
        res.status(200).json({ historiquesCommandes });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(404).json({ error: error.message });
    }
};

