
import { EtatCommande } from "../models/index.js";

export const creerEtatCommande = async (req, res) => {
    try {
        const nouvelEtatCommande = await EtatCommande.create(req.body);
        res.status(201).json({ data: nouvelEtatCommande });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireEtatCommande = async (req, res) => {
    const etatCommandeId = req.params.id;
    try {
        const etatCommande = await EtatCommande.findByPk(etatCommandeId);
        if (!etatCommande) {
            res.status(404).json({ error: "État de commande non trouvé" });
        } else {
            res.status(200).json({ data: etatCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourEtatCommande = async (req, res) => {
    const etatCommandeId = req.params.id;
    try {
        const etatCommande = await EtatCommande.findByPk(etatCommandeId);
        if (!etatCommande) {
            res.status(404).json({ error: "État de commande non trouvé" });
        } else {
            await etatCommande.update(req.body);
            res.status(200).json({ data: etatCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerEtatCommande = async (req, res) => {
    const etatCommandeId = req.params.id;
    try {
        const etatCommande = await EtatCommande.findByPk(etatCommandeId);
        if (!etatCommande) {
            res.status(404).json({ error: "État de commande non trouvé" });
        } else {
            await etatCommande.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
