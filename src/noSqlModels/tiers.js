const database = require('../services/database.service');
const fakerator = require('fakerator')("fr-FR");
const Question = require('./question');
const Reservation = require('./reservation');

const tierSchema = new database.Schema({
    nomTiers: { type: String },
    prenomTiers: { type: String },
    mailTiers: { type: String },
    mdp: { type: String },
    typeTiers: { type: String },
    questions: {
        type: [Question.QuestionModel.questionSchema]
    },
    reservations: {
        type: [Reservation.ReservationModel.reservationSchema]
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