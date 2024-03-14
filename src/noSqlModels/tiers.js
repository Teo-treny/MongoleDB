const database = require('../services/database.service');
const fakerator = require('fakerator')("fr-FR");

const tierSchema = new database.Schema({
    // idTiers: { type: database.Schema.Types.ObjectId, required: true },
    nomTiers: { type: String },
    prenomTiers: { type: String },
    mailTiers: { type: String },
    mdp: { type: String },
    typeTiers: { type: String },
    questions: {
        type: [{
            idQuestion: { type: database.Schema.Types.ObjectId, required: true },
            idAuteur: { type: database.Schema.Types.ObjectId, required: true },
            idBien: { type: database.Schema.Types.ObjectId, required: true },
            idSource: { type: database.Schema.Types.ObjectId, required: true },
            texte: { type: String }
        }]
    },
    reservations: {
        type: [{
            idReservation: { type: database.Schema.Types.ObjectId, required: true },
            idBien: { type: database.Schema.Types.ObjectId, required: true },
            idTiers: { type: database.Schema.Types.ObjectId, required: true },
            dateDebut: { type: Date },
            dateFin: { type: Date },
            tarifQuotion: { type: Number },
            montantTotal: { type: Number },
            dateReservation: { type: Date },
            dateReglement: { type: Date },
            etat: { type: String },
            commentaire: { type: String },
            reponseCommentaire: { type: String }
        }]
    },
});

TierModel = database.model('Tiers', tierSchema);

function createRandomTier() {
    let tier = new TierModel({
        nomTiers: fakerator.names.lastName(),
        prenomTiers: fakerator.names.firstName(),
        mailTiers: fakerator.internet.email(),
        mdp: fakerator.internet.password(),
        typeTiers: fakerator.random.boolean() ? "Client" : "Proprietaire",
    });

    return tier;
}

module.exports = {TierModel, createRandomTier};