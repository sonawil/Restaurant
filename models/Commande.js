import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Commande = database.define('Commande', {
    date: {
        type: DataTypes.DATE
    }
});

export default Commande