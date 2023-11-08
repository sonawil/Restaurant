//Importer les modeles
const Commande = require('./Commande.js');
const Role = require('./role.js');
const Panier = require('./Panier.js');
const Utilisateur = require('./Utilisateur.js');
const EtatCommande = require('./EtatCommande.js');
const HistoriqueCommandes = require('./HistoriqueCommandes.js');
const Livraison = require('./Livraison.js');
const Produit = require('./Produit.js');
const HistoriqueLivraison = require('./HistoriqueLivraison.js');
const DetailsCommande = require('./DetailsCommande.js');
const Paiement = require('./Paiement.js');
const Livreur = require('./Livreur.js');


// Associations entre les tables .
// Association entre "Utilisateur" et "Role".(utilisateur peut avoir un rôle).
Utilisateur.belongsTo(Role);
Role.hasMany(Utilisateur);

// Association entre "Utilisateur" et "Panier".(utilisateur peut avoir plusieurs paniers).
Utilisateur.hasMany(Panier);
Panier.belongsTo(Utilisateur);

// Association entre "Commande" et "Utilisateur".(commande appartient à un utilisateur).
Commande.belongsTo(Utilisateur);
Utilisateur.hasMany(Commande);

// Association entre "Commande" et "EtatCommande".(commande appartient à un état de commande).
Commande.belongsTo(EtatCommande);
EtatCommande.hasMany(Commande);

// Association entre "Livraison" et "Commande".(livraison appartient à une commande).
Livraison.belongsTo(Commande);
Commande.hasMany(Livraison);

// Association entre "DetailsCommande" et "Produit".(détails de commande concernent un produit).
DetailsCommande.belongsTo(Produit);
Produit.hasMany(DetailsCommande);

// Association entre "DetailsCommande" et "Commande".(détails de commande appartiennent à une commande).
DetailsCommande.belongsTo(Commande);
Commande.hasMany(DetailsCommande);

// Association entre "Paiement" et "Commande".(paiement est lié à une commande).
Paiement.belongsTo(Commande);
Commande.hasMany(Paiement);

// Association entre "Livraison" et "HistoriqueLivraison".(historique de livraison appartient à une livraison).
HistoriqueLivraison.belongsTo(Livraison);
Livraison.hasMany(HistoriqueLivraison);

// Association entre "Livraison" et "Livreur".(livraison est associée à un livreur).
Livraison.belongsTo(Livreur);
Livreur.hasMany(Livraison);


export {Panier, Role, Utilisateur, EtatCommande, HistoriqueCommandes,Commande, Livraison, Livreur, Produit, HistoriqueLivraison,DetailsCommande,Paiement}