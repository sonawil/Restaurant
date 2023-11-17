import { DetailsCommande } from "../models/index.js";


export const creerDetailCommande = async (req, res) => {
    try {
        const nouveauDetailCommande = await DetailsCommande.create(req.body);
        res.status(201).json({ data: nouveauDetailCommande });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireDetailCommande = async (req, res) => {
    const detailCommandeId = req.params.id;
    try {
        const detailCommande = await DetailsCommande.findByPk(detailCommandeId);
        if (!detailCommande) {
            res.status(404).json({ error: "Détail de commande non trouvé" });
        } else {
            res.status(200).json({ data: detailCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourDetailCommande = async (req, res) => {
    const detailCommandeId = req.params.id;
    try {
        const detailCommande = await DetailsCommande.findByPk(detailCommandeId);
        if (!detailCommande) {
            res.status(404).json({ error: "Détail de commande non trouvé" });
        } else {
            await detailCommande.update(req.body);
            res.status(200).json({ data: detailCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}




export const supprimerDetailCommande = async (req, res) => {
    const detailCommandeId = req.params.id;
    try {
        const detailCommande = await DetailsCommande.findByPk(detailCommandeId);
        if (!detailCommande) {
            res.status(404).json({ error: "Détail de commande non trouvé" });
        } else {
            await detailCommande.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listerDetailsCommande = async (req, res) => {
    try {
        // Utiliser Sequelize pour récupérer tous les détails de commande depuis la base de données
        const detailsCommande = await DetailsCommande.findAll();

        // Répondre avec la liste des détails de commande
        res.status(200).json({ detailsCommande });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(404).json({ error: error.message });
    }
};

