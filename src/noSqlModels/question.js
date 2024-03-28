const { ObjectId } = require('mongodb');
const database = require('../services/database.service');
const fakerator = require('fakerator');

const questionSchema = new database.Schema({
    idAuteur: { type: database.Schema.Types.ObjectId, required: true },
    questions: {
        type: [this]
    },
    texte: { type: String }
});

QuestionModel = database.model('Question', questionSchema);

/**
 * Creates a question
 * @param {ObjectId} idAuteur 
 * @param {QuestionModel} linkedQuestions 
 * @param {String} texte 
 * @returns {QuestionModel}
 */
function createQuestion(idAuteur, linkedQuestions, texte) {

    // Create a question
    let question = new QuestionModel({
        idAuteur: idAuteur,
        texte: texte
    });

    // Add linked questions
    if(linkedQuestions != null)
        linkedQuestions.forEach(element => {
            question.questions.push(element);
        });

    // Return result
    return question;
}

/**
 * Create a random question. You can provide an idSource to link the question to another. Otherwise, it will be independant and the idSource attribute will be null.
 * @param {QuestionModel} linkedQuestions 
 * @returns {QuestionModel}
 */
function createRandomQuestion(linkedQuestions) {
    
    // Create a random question
    randomQuestion = createQuestion(
        new ObjectId(), 
        linkedQuestions, 
        fakerator().lorem.sentence());

    // Return result
    return randomQuestion;
}

module.exports = {QuestionModel, createRandomQuestion};