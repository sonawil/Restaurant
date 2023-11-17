import { Utilisateur } from "../models/index.js"

export const isAdmin = async (req, res, next) => {
    // Recuperation de l'id a partir de la requete
    const id = req.userId  //depuis verifierLogin
    try {
        const user = await U.findByPk(id)
        if (!user) return res.status(404).json({ message: "Cet utilisateur n'existe pas!" })

        try {
            const role = await user.getRole()
            if (role && role.nom.toLowerCase() == 'admin') {
                next()
            } else {
                return res.status(403).json({ message: "Il faut avoir le droit admin!!" })
            }

        } catch (error) {
            res.status(404).json({ message: error.message })
        }
    } catch (error) {
        res.status(404).json({ message: error.message })
    }


}