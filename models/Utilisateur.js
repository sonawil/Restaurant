import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Utilisateur = database.define('Utilisateur', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    naissance: {
        type: DataTypes.DATEONLY
    },
    photo: {
        type: DataTypes.STRING
    },
    telephone: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    mot_de_passe: DataTypes.STRING
});

export default Utilisateur