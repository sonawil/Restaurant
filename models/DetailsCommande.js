import { DataTypes } from "sequelize";

import database from "../connexion.js";

const DetailsCommande = database.define('DetailsCommande', {
    quantite: {
        type: DataTypes.INTEGER
    }
})

export default DetailsCommande