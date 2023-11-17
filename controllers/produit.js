import { Produit } from "../models/index.js";

export const creerProduit = async (req, res) => {
    try {
        const nouveauProduit = await Produit.create(req.body);
        res.status(201).json({ data: nouveauProduit });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireProduit = async (req, res) => {
    const produitId = req.params.id;
    try {
        const produit = await Produit.findByPk(produitId);
        if (!produit) {
            res.status(404).json({ error: "Produit non trouvé" });
        } else {
            res.status(200).json({ data: produit });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourProduit = async (req, res) => {
    const produitId = req.params.id;
    try {
        const produit = await Produit.findByPk(produitId);
        if (!produit) {
            res.status(404).json({ error: "Produit non trouvé" });
        } else {
            await produit.update(req.body);
            res.status(200).json({ data: produit });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerProduit = async (req, res) => {
    const produitId = req.params.id;
    try {
        const produit = await Produit.findByPk(produitId);
        if (!produit) {
            res.status(404).json({ error: "Produit non trouvé" });
        } else {
            await produit.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const listeProduits = async (req, res) => {
    try {
        // Récupérer les paramètres de pagination depuis la requête
        const page = parseInt(req.query.page) || 1; // Page par défaut: 1
        const limit = parseInt(req.query.limit) || 10; // Limite par défaut: 10 produits par page

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * limit;

        // Utiliser Sequelize pour récupérer les produits paginés
        const produits = await Produit.findAndCountAll({
            offset,
            limit
        });

        // Répondre avec les produits paginés
        res.status(200).json({ produits });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(404).json({ error: error.message });
    }
};
