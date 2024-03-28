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

/**
 * Creates a bien
 * @param {String} adresseBien 
 * @param {String} cpBien 
 * @param {String} villeBien 
 * @param {String} typeLocation 
 * @param {Number} tarifBase 
 * @param {QuestionModel[]} questions 
 * @param {ReservationModel[]} reservations 
 * @param {CalendrierModel[]} calendriers 
 * @returns 
 */
function createBien(adresseBien, cpBien, villeBien, typeLocation, tarifBase, questions, reservations, calendriers) {
    
    // Create a bien
    let bien = new BienModel({
        adresseBien: adresseBien,
        cpBien: cpBien,
        villeBien: villeBien,
        typeLocation: typeLocation,
        tarifBase: tarifBase,
    });

    // Add questions, reservations and calendriers
    questions.forEach(element => {
        bien.questions.push(element);
    });
    reservations.forEach(element => {
        bien.reservations.push(element);
    });
    calendriers.forEach(element => {
        bien.calendriers.push(element);
    });

    // Return result
    return bien;
}

/**
 * Create random bien. You can provide the amount of questions and the depth of the questions.
 * @param {Number} questionAmount 
 * @param {Number} questionDepth 
 * @returns 
 */
function createRandomBien(questionAmount, questionDepth) {

    // 1. Create random questions

    // Create an array of random questions
    let randomQuestions = [];
    
    // If no questionAmount is provided, create only one question
    if(!questionAmount)
        questionAmount = 0;

    // If no questionDepth is provided, create only one question
    if(!questionDepth)
        questionDepth = 0;

    // Create the questions
    for (let i = 0; i < questionAmount; i++) {
        newRandomQuestion = Question.createRandomQuestion();
        randomQuestions.push(newRandomQuestion);

        // Create the depth of the questions
        for (let j = 0; j < questionDepth; j++) {
            newRandomQuestionInDepth = Question.createRandomQuestion();
            newRandomQuestion.questions.push(newRandomQuestionInDepth);
        }
    }

    // 2. Create random bien
    let randomBien = createBien(
        fakerator.address.street(), 
        fakerator.address.postCode(),
        fakerator.address.city(), 
        fakerator.random.boolean() ? "Location" : "Vente", 
        fakerator.random.number(),
        [],
        [],
        []
    );

    // Add questions
    randomQuestions.forEach(element => {
        randomBien.questions.push(element);
    });

    // Add reservations
    for (let i = 0; i < fakerator.random.number(1, 10); i++) {
        switch(fakerator.random.number(0, 2)) {
            case 0:
                etat = "Terminee";
                break;
            case 1:
                etat = "En cours";
                break;
            case 2:
                etat = "Confirmee";
                break;
        }
        randomBien.reservations.push(Reservation.createRandomReservation_incr(etat, i));
    }

    // 3. Return result
    return randomBien;
}

// Export the model
module.exports = {BienModel, createRandomBien};