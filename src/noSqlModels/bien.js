const database = require('../services/database.service');
const Question = require('./question');
const Reservation = require('./reservation');
const Calendrier = require('./calendrier');
const fakerator = require('fakerator')("fr-FR");

const bienSchema = new database.Schema({
    adresseBien: { type: String },
    cpBien: { type: String },
    villeBien: { type: String },
    typeLocation: { type: String },
    tarifBase: { type: Number },
    questions: {
        type: [Question.QuestionModel.questionSchema]
    },
    reservations: {
        type: [Reservation.ReservationModel.reservationSchema]
    },
    calendriers: {
        type: [Calendrier.CalendrierModel.calendrierSchema]
    }
});

BienModel = database.model('Bien', bienSchema);

function createRandomBien() {

    let bien = new BienModel({
        adresseBien: fakerator.address.street(),
        cpBien: fakerator.address.postCode(),
        villeBien: fakerator.address.city(),
        typeLocation: fakerator.random.boolean() ? "Location" : "Vente",
        tarifBase: fakerator.random.number(),
    });
    bien.questions.push(Question.createRandomQuestion());
    bien.reservations.push(Reservation.createRandomReservation());
    bien.calendriers.push(Calendrier.createRandomCalendrier());
    return bien;
}

// Export the model
module.exports = {BienModel, createRandomBien};