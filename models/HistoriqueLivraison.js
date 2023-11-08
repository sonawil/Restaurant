import { DataTypes } from "sequelize";

import database from "../connexion.js";

const HistoriqueLivraison = database.define('HistoriqueLivraison', {
    date: {
        type: DataTypes.DATE
    }
});

export default HistoriqueLivraison