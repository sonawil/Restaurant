import { Utilisateur } from "../models/index.js";

//Module pour hacher le mot de passe
import bcrypt from 'bcryptjs'

//Ajout des validations
import { validationResult } from "express-validator";

//Ajout validation a nous meme
//import validerUtilisateur from "../validations/validationDeLutilisateur.js";


export const creerUtilisateur = async (req, res) => {
    // const utilisateurACreer = req.body

    const { nom, prenom, email, mot_de_passe, naissance, RoleId } = req.body

    const errors = validationResult(req) //Fonction par defaut
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() })   
   }
    const mdpHache = bcrypt.hashSync(mot_de_passe, 10)
    const utilisateur = { nom, prenom, email, mot_de_passe: mdpHache, naissance, RoleId }

    try {
        const nouvelUtilisateur = await Utilisateur.create(utilisateur);
        res.status(201).json({ data: nouvelUtilisateur });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listerUtilisateur = async (req, res) => {
    try {
        // Récupérer les paramètres de pagination depuis la requête
        const page = parseInt(req.query.page) || 1; // Page par défaut: 1
        const limit = parseInt(req.query.limit) || 10; // Limite par défaut: 10 utilisateurs par page

        // Calculer l'offset pour la pagination
        const offset = (page - 1) * limit;

        // Utiliser Sequelize pour récupérer les utilisateurs paginés
        const utilisateurs = await Utilisateur.findAndCountAll({
            offset,
            limit
        });

        // Répondre avec les utilisateurs paginés
        res.status(200).json({ utilisateurs });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(500).json({ error: error.message });
    }
};



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

