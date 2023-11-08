import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Livreur = database.define('Livreur', {
    nom_livreur: {
        type: DataTypes.STRING
    },
    prenom_livreur: {
        type: DataTypes.STRING
    },
    
});

export default Livreur