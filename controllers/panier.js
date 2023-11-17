import { Panier } from "../models/index.js";

export const creerPanier = async (req, res) => {
    try {
        const nouveauPanier = await Panier.create(req.body);
        res.status(201).json({ data: nouveauPanier });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lirePanier = async (req, res) => {
    const panierId = req.params.id;
    try {
        const panier = await Panier.findByPk(panierId);
        if (!panier) {
            res.status(404).json({ error: "Panier non trouvé" });
        } else {
            res.status(200).json({ data: panier });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listePaniers = async (req, res) => {
    try {
        // Récupérer les paramètres de pagination depuis la requête
        const page = parseInt(req.query.page) || 1; // Page par défaut: 1
        const limit = parseInt(req.query.limit) || 10; // Limite par défaut: 10 paniers par page

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * limit;

        // Utiliser Sequelize pour récupérer les paniers paginés
        const paniers = await Panier.findAndCountAll({
            offset,
            limit
        });

        // Répondre avec les paniers paginés
        res.status(200).json({ paniers });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(404).json({ error: error.message });
    }
};



export const mettreAJourPanier = async (req, res) => {
    const panierId = req.params.id;
    try {
        const panier = await Panier.findByPk(panierId);
        if (!panier) {
            res.status(404).json({ error: "Panier non trouvé" });
        } else {
            await panier.update(req.body);
            res.status(200).json({ data: panier });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerPanier = async (req, res) => {
    const panierId = req.params.id;
    try {
        const panier = await Panier.findByPk(panierId);
        if (!panier) {
            res.status(404).json({ error: "Panier non trouvé" });
        } else {
            await panier.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

