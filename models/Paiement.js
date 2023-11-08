
import { DataTypes } from "sequelize";

import database from "../connexion.js";

const Paiement = database.define('Paiement', {
    montant_paye: {
        type: DataTypes.REAL
    },
    mode_paiement: {
        type: DataTypes.STRING
    }
});

export default Paiement