import { Livraison } from "../models/index.js";

export const creerLivraison = async (req, res) => {
    try {
        const nouvelleLivraison = await Livraison.create(req.body);
        res.status(201).json({ data: nouvelleLivraison });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireLivraison = async (req, res) => {
    const livraisonId = req.params.id;
    try {
        const livraison = await Livraison.findByPk(livraisonId);
        if (!livraison) {
            res.status(404).json({ error: "Livraison non trouvée" });
        } else {
            res.status(200).json({ data: livraison });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourLivraison = async (req, res) => {
    const livraisonId = req.params.id;
    try {
        const livraison = await Livraison.findByPk(livraisonId);
        if (!livraison) {
            res.status(404).json({ error: "Livraison non trouvée" });
        } else {
            await livraison.update(req.body);
            res.status(200).json({ data: livraison });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const supprimerLivraison = async (req, res) => {
    const livraisonId = req.params.id;
    try {
        const livraison = await Livraison.findByPk(livraisonId);
        if (!livraison) {
            res.status(404).json({ error: "Livraison non trouvée" });
        } else {
            await livraison.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

