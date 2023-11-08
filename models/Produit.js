import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Produit = database.define('Produit', {
    nom_produit: {
        type: DataTypes.STRING
    },
    photo: {
        type: DataTypes.STRING
    },
    prix: {
        type: DataTypes.DOUBLE
    }
})

export default Produit