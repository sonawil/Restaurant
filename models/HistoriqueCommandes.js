import { DataTypes } from "sequelize";

import database from "../connexion.js";

const HistoriqueCommandes = database.define('HistoriqueCommandes', {
    montant_commande: {
        type: DataTypes.REAL
    },
    date_commande: {
        type: DataTypes.DATE
    }
})

export default HistoriqueCommandes