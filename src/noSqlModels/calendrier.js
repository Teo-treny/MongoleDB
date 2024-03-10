const database = require('../services/database.service');
const fakerator = require('fakerator');

const calendrierSchema = new database.Schema({
    date: { type: Date },
    tarifJournalier: { type: Number },
    etat: { type: Number }
});

CalendrierModel = database.model('Calendrier', calendrierSchema);

function createRandomCalendrier() {
    let calendrier = new CalendrierModel({
        date: fakerator().date.recent(),
        tarifJournalier: fakerator().random.number(100, 1000),
        etat: fakerator().random.boolean() ? 1 : 0
    });
    return calendrier;
}

module.exports = {CalendrierModel, createRandomCalendrier};