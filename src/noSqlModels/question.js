const { ObjectId } = require('mongodb');
const database = require('../services/database.service');
const fakerator = require('fakerator');

const questionSchema = new database.Schema({
    idAuteur: { type: database.Schema.Types.ObjectId, required: true },
    idSource: { type: database.Schema.Types.ObjectId, required: true },
    texte: { type: String }
});

QuestionModel = database.model('Question', questionSchema);

function createRandomQuestion() {
    let question = new QuestionModel({
        idAuteur: new ObjectId(),
        idSource: new ObjectId(),
        texte: fakerator().lorem.sentence()
    });
    return question;
}

module.exports = {QuestionModel, createRandomQuestion};