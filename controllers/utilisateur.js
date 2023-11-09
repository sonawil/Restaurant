import { Utilisateur } from "../models/index.js";

export const creerUtilisateur = async (req, res) => {
    try {
        const nouvelUtilisateur = await Utilisateur.create(req.body);
        res.status(201).json({ data: nouvelUtilisateur });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const lireUtilisateur = async (req, res) => {
    const utilisateurId = req.params.id;
    try {
        const utilisateur = await Utilisateur.findByPk(utilisateurId);
        if (!utilisateur) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
        } else {
            res.status(200).json({ data: utilisateur });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const mettreAJourUtilisateur = async (req, res) => {
    const utilisateurId = req.params.id;
    try {
        const utilisateur = await Utilisateur.findByPk(utilisateurId);
        if (!utilisateur) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
        } else {
            await utilisateur.update(req.body);
            res.status(200).json({ data: utilisateur });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerUtilisateur = async (req, res) => {
    const utilisateurId = req.params.id;
    try {
        const utilisateur = await Utilisateur.findByPk(utilisateurId);
        if (!utilisateur) {
            res.status(404).json({ error: "Utilisateur non trouvé" });
        } else {
            await utilisateur.destroy();
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const utilisateurPagination = async(req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
  
    // Utiliser "Utilisateur" pour faire une requete de base de donnees avec pagination
  
    Utilisateur.findAndCountAll({
      offset: (page - 1) * limit,
      limit: limit,
    })
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json({ error: 'Une erreur sest produite' });
      });
  
}