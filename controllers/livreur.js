import { Livreur } from "../models/index.js";

export const creerLivreur = async (req, res) => {
    try {
        const nouveauLivreur = await Livreur.create(req.body);
        res.status(201).json({ data: nouveauLivreur });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const lireLivreur = async (req, res) => {
    const livreurId = req.params.id;
    try {
        const livreur = await Livreur.findByPk(livreurId);
        if (!livreur) {
            res.status(404).json({ error: "Livreur non trouvé" });
        } else {
            res.status(200).json({ data: livreur });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourLivreur = async (req, res) => {
    const livreurId = req.params.id;
    try {
        const livreur = await Livreur.findByPk(livreurId);
        if (!livreur) {
            res.status(404).json({ error: "Livreur non trouvé" });
        } else {
            await livreur.update(req.body);
            res.status(200).json({ data: livreur });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerLivreur = async (req, res) => {
    const livreurId = req.params.id;
    try {
        const livreur = await Livreur.findByPk(livreurId);
        if (!livreur) {
            res.status(404).json({ error: "Livreur non trouvé" });
        } else {
            await livreur.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
