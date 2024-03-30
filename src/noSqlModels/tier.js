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
    questions: [{
        type: Question.QuestionModel.questionSchema
    }],
    reservations: [{
        type: Reservation.ReservationModel.reservationSchema
    }]
});

TierModel = database.model('Tier', tierSchema);
TierModel.tierSchema = tierSchema;

/**
 * Create a new Tier
 * @param {String} nomTiers 
 * @param {String} prenomTiers 
 * @param {String} mailTiers 
 * @param {String} mdp 
 * @param {String} typeTiers 
 * @param {[QuestionModel]} questions 
 * @param {[ReservationModel]} reservations 
 * @returns {TierModel}
 */
function createTier(nomTiers, prenomTiers, mailTiers, mdp, typeTiers, questions, reservations) {
    
    // Create a new Tier
    let tier = new TierModel({
        nomTiers: nomTiers,
        prenomTiers: prenomTiers,
        mailTiers: mailTiers,
        mdp: mdp,
        typeTiers: typeTiers,
        questions: [],
        reservations: []
    });

    // Add questions to the Tier
    questions.forEach(element => {
        tier.questions.push(element);
    });

    // Add reservations to the Tier
    reservations.forEach(element => {
        tier.reservations.push(element);
    });

    // Return result
    return tier;
}

/**
 * Create random Tier. You can provide the amount of questions and the depth of the questions.
 * @param {Number} questionAmount 
 * @param {Number} questionDepth 
 * @returns 
 */
function createRandomTier(questionAmount, questionDepth) {

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

    // 2. Create random tier
    let randomTier = createTier(
        fakerator.names.firstName(),
        fakerator.names.lastName(),
        fakerator.internet.email(),
        fakerator.internet.password(),
        fakerator.random.arrayElement(["locataire", "proprietaire"]),
        [],
        []
    )

    // Add questions
    randomQuestions.forEach(element => {
        randomTier.questions.push(element);
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
        randomTier.reservations.push(Reservation.createRandomReservation_incr(etat, i));
    }

    // Return result
    return randomTier;
}


module.exports = {TierModel, createRandomTier};