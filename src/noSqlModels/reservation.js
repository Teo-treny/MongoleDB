
const { ObjectId } = require('mongodb');
const database = require('../services/database.service');
const fakerator = require('fakerator');

const reservationSchema = new database.Schema({
    idTiers: { type: database.Schema.Types.ObjectId, required: true },
    dateDebut: { type: Date },
    dateFin: { type: Date },
    tarifQuotidien: { type: Number },
    montantTotal: { type: Number },
    dateReservation: { type: Date },
    dateReglement: { type: Date },
    etat: { type: String },
    commentaire: { type: String },
    reponseCommentaire: { type: String }
});

ReservationModel = database.model('Reservation', reservationSchema);

function createRandomReservation() {
    let reservation = new ReservationModel({
        idTiers: new ObjectId(),
        dateDebut: fakerator().date.recent(),
        dateFin: fakerator().date.future(),
        tarifQuotidien: fakerator().random.number(100, 1000),
        montantTotal: fakerator().random.number(1000, 10000),
        dateReservation: fakerator().date.recent(),
        dateReglement: fakerator().date.recent(),
        etat: fakerator().random.boolean() ? "En cours" : "Terminée",
        commentaire: fakerator().lorem.sentence(),
        reponseCommentaire: fakerator().lorem.sentence()
    });
    return reservation;
}

module.exports = {ReservationModel, createRandomReservation};