import { DataTypes } from "sequelize";

import database from "../connexion.js";

const EtatCommande = database.define('EtatCommande', {
    nom: {
        type: DataTypes.STRING
    }
});

export default EtatCommande