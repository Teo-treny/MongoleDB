const database = require('../services/database.service');

const bienSchema = new database.Schema({
    idBien: { type: database.Schema.Types.ObjectId, required: true },
    adresseBien: { type: String },
    cpBien: { type: String },
    villeBien: { type: String },
    typeLocation: { type: String },
    tarifBase: { type: Number },
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
    calendriers: {
        type: [{
            date: { type: Date },
            idBien: { type: database.Schema.Types.ObjectId, required: true },
            tarifJournalier: { type: Number },
            etat: { type: Number }
        }]
    }
});

// Export the model and the function
module.exports = database.model('Bien', bienSchema);