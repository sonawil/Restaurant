import { Paiement } from "../models/index.js";

export const creerPaiement = async (req, res) => {
    try {
        const nouveauPaiement = await Paiement.create(req.body);
        res.status(201).json({ data: nouveauPaiement });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lirePaiement = async (req, res) => {
    const paiementId = req.params.id;
    try {
        const paiement = await Paiement.findByPk(paiementId);
        if (!paiement) {
            res.status(404).json({ error: "Paiement non trouvé" });
        } else {
            res.status(200).json({ data: paiement });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourPaiement = async (req, res) => {
    const paiementId = req.params.id;
    try {
        const paiement = await Paiement.findByPk(paiementId);
        if (!paiement) {
            res.status(404).json({ error: "Paiement non trouvé" });
        } else {
            await paiement.update(req.body);
            res.status(200).json({ data: paiement });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerPaiement = async (req, res) => {
    const paiementId = req.params.id;
    try {
        const paiement = await Paiement.findByPk(paiementId);
        if (!paiement) {
            res.status(404).json({ error: "Paiement non trouvé" });
        } else {
            await paiement.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listerPaiements = async (req, res) => {
    try {
        // Utiliser Sequelize pour récupérer tous les paiements depuis la base de données
        const paiements = await Paiement.findAll();

        // Répondre avec la liste des paiements
        res.status(200).json({ paiements });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(500).json({ error: error.message });
    }
};
