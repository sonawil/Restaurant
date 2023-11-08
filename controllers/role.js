import { Role } from "../models/index.js";

export const creerRole = async (req, res) => {
    try {
        const nouveauRole = await Role.create(req.body);
        res.status(201).json({ data: nouveauRole });
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
            res.status(200).json({ data: role });
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
            res.status(204).send(); // 204 signifie "No Content"
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
