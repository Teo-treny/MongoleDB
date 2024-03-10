const database = require('../services/database.service');

const tierSchema = new database.Schema({
    idTiers: { type: database.Schema.Types.ObjectId, required: true },
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

module.exports = database.model('Tiers', tierSchema);