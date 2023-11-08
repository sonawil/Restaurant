import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Panier = database.define('Panier', {
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

export default Panier