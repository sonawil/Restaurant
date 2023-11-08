import { HistoriqueCommandes } from "../models/index.js";

export const creerHistoriqueCommande = async (req, res) => {
    try {
        const nouvelHistoriqueCommande = await HistoriqueCommandes.create(req.body);
        res.status(201).json({ data: nouvelHistoriqueCommande });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireHistoriqueCommande = async (req, res) => {
    const historiqueCommandeId = req.params.id;
    try {
        const historiqueCommande = await HistoriqueCommandes.findByPk(historiqueCommandeId);
        if (!historiqueCommande) {
            res.status(404).json({ error: "Historique de commande non trouvé" });
        } else {
            res.status(200).json({ data: historiqueCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourHistoriqueCommande = async (req, res) => {
    const historiqueCommandeId = req.params.id;
    try {
        const historiqueCommande = await HistoriqueCommandes.findByPk(historiqueCommandeId);
        if (!historiqueCommande) {
            res.status(404).json({ error: "Historique de commande non trouvé" });
        } else {
            await historiqueCommande.update(req.body);
            res.status(200).json({ data: historiqueCommande });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerHistoriqueCommande = async (req, res) => {
    const historiqueCommandeId = req.params.id;
    try {
        const historiqueCommande = await HistoriqueCommandes.findByPk(historiqueCommandeId);
        if (!historiqueCommande) {
            res.status(404).json({ error: "Historique de commande non trouvé" });
        } else {
            await historiqueCommande.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
