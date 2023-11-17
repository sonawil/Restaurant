import { HistoriqueLivraison } from "../models/index.js";

export const creerHistoriqueLivraison = async (req, res) => {
    try {
        const nouvelHistoriqueLivraison = await HistoriqueLivraison.create(req.body);
        res.status(201).json({ data: nouvelHistoriqueLivraison });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireHistoriqueLivraison = async (req, res) => {
    const historiqueLivraisonId = req.params.id;
    try {
        const historiqueLivraison = await HistoriqueLivraison.findByPk(historiqueLivraisonId);
        if (!historiqueLivraison) {
            res.status(404).json({ error: "Historique de livraison non trouvé" });
        } else {
            res.status(200).json({ data: historiqueLivraison });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourHistoriqueLivraison = async (req, res) => {
    const historiqueLivraisonId = req.params.id;
    try {
        const historiqueLivraison = await HistoriqueLivraison.findByPk(historiqueLivraisonId);
        if (!historiqueLivraison) {
            res.status(404).json({ error: "Historique de livraison non trouvé" });
        } else {
            await historiqueLivraison.update(req.body);
            res.status(200).json({ data: historiqueLivraison });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerHistoriqueLivraison = async (req, res) => {
    const historiqueLivraisonId = req.params.id;
    try {
        const historiqueLivraison = await HistoriqueLivraison.findByPk(historiqueLivraisonId);
        if (!historiqueLivraison) {
            res.status(404).json({ error: "Historique de livraison non trouvé" });
        } else {
            await historiqueLivraison.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listeHistoriqueLivraisons = async (req, res) => {
    try {
        // Récupérer les paramètres de pagination depuis la requête
        const page = parseInt(req.query.page) || 1; // Page par défaut: 1
        const limit = parseInt(req.query.limit) || 10; // Limite par défaut: 10 historiques de livraisons par page

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * limit;

        // Utiliser Sequelize pour récupérer l'historique de livraisons paginé
        const historiquesLivraisons = await HistoriqueLivraison.findAndCountAll({
            offset,
            limit
        });

        // Répondre avec l'historique de livraisons paginé
        res.status(200).json({ historiquesLivraisons });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(404).json({ error: error.message });
    }
};

