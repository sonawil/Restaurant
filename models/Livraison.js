import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Livraison = database.define('Livraison', {
    date: {
        type: DataTypes.DATE
    },
    statut_livraison: {
        type: DataTypes.STRING
    },
    adresse_livraison: {
        type: DataTypes.STRING
    }
});

export default Livraison