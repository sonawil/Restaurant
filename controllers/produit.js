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
