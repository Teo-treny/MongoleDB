const { ObjectId } = require('mongodb');
const database = require('../services/database.service');
const fakerator = require('fakerator');

const questionSchema = new database.Schema({
    idAuteur: { type: database.Schema.Types.ObjectId, required: true },
    questions: {
        type: [this]
    },
    tags: [{
        type: String
    }],
    texte: { type: String }
});

QuestionModel = database.model('Question', questionSchema);

/**
 * Creates a question
 * @param {ObjectId} idAuteur 
 * @param {QuestionModel[]} linkedQuestions 
 * @param {String[]} tags
 * @param {String} texte 
 * @returns {QuestionModel}
 */
function createQuestion(idAuteur, linkedQuestions=[], tags=[], texte) {

    // Create a question
    let question = new QuestionModel({
        idAuteur: idAuteur,
        texte: texte
    });

    // Add linked questions
    linkedQuestions.forEach(element => {
        question.questions.push(element);
    });

    // Add tags
    tags.forEach(element => {
        question.tags.push(element);
    });

    // Return result
    return question;
}

/**
 * Create a random question.
 * You can add other questions to link to the new question.
 * You can add tags to the new question.
 * @param {QuestionModel[]} linkedQuestions 
 * @returns {QuestionModel}
 */
function createRandomQuestion(linkedQuestions=[]) {
    
    // Create a random question
    randomQuestion = createQuestion(
        new ObjectId(),
        linkedQuestions,
        tags,
        fakerator().lorem.sentence() 
    );

    // Add tags to the question
    for(let i = 0; i < fakerator().random.number(1, 3); i++) {
        randomQuestion.tags.push('#'+fakerator().lorem.word());
    }
    
    // Return result
    return randomQuestion;
}

module.exports = {QuestionModel, createRandomQuestion};