import { Role } from "../models/index.js";

export const creerRole = async (req, res) => {
    try {
        const nouveauRole = await Role.create(req.body);
        res.status(201).json({ message: "Rôle ajouté avec succès", data: nouveauRole });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}




export const lireRole = async (req, res) => {
    const roleId = req.params.id;
    try {
        const role = await Role.findByPk(roleId);
        if (!role) {
            res.status(404).json({ error: "Rôle non trouvé" });
        } else {
            res.status(200).json({ data: role });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


export const mettreAJourRole = async (req, res) => {
    const roleId = req.params.id;
    try {
        const role = await Role.findByPk(roleId);
        if (!role) {
            res.status(404).json({ error: "Rôle non trouvé" });
        } else {
            await role.update(req.body);
            res.status(200).json({ message: "Rôle mis à jour avec succès", data: role });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}



export const supprimerRole = async (req, res) => {
    const roleId = req.params.id;
    try {
        const role = await Role.findByPk(roleId);
        if (!role) {
            res.status(404).json({ error: "Rôle non trouvé" });
        } else {
            await role.destroy();
            res.status(204).json({ message: "Rôle supprimé avec succès" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const listerRoles = async (req, res) => {
    try {
        // Utiliser Sequelize pour récupérer tous les rôles depuis la base de données
        const roles = await Role.findAll();

        // Répondre avec la liste des rôles
        res.status(200).json({ roles });
    } catch (error) {
        // En cas d'erreur, renvoyer un code d'erreur et un message
        res.status(500).json({ error: error.message });
    }
}