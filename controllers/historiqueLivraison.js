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

