
const { ObjectId } = require('mongodb');
const database = require('../services/database.service');
const fakerator = require('fakerator');
const Tier = require('./tiers');

const reservationSchema = new database.Schema({
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

/**
 * Adds days to a date
 * @param {Date} date 
 * @param {Number} days 
 * @returns {Date}
 */
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

/**
 * Calculates the number of days between two dates
 * @param {Date} date1 
 * @param {Date} date2 
 * @returns {Number}
 */
function daysBetween(date1, date2) {
    let diffInTime = date2.getTime() - date1.getTime();
    let diffInDays = Math.round(diffInTime / (1000 * 3600 * 24));
    return diffInDays;
}

/**
 * Creates a reservation
 * @param {Date} dateDebut 
 * @param {Date} dateFin 
 * @param {Number} tarifQuotidien 
 * @param {Number} montantTotal 
 * @param {Date} dateReservation 
 * @param {Date} dateReglement 
 * @param {String} etat 
 * @param {String} commentaire 
 * @param {String} reponseCommentaire 
 * @returns {ReservationModel}
 */
function createReservation(dateDebut, dateFin, tarifQuotidien, montantTotal, dateReservation, dateReglement, etat, commentaire, reponseCommentaire) {

    // Create a reservation
    let reservation = new ReservationModel({
        dateDebut: dateDebut,
        dateFin: dateFin,
        tarifQuotidien: tarifQuotidien,
        montantTotal: montantTotal,
        dateReservation: dateReservation,
        dateReglement: dateReglement,
        etat: etat,
        commentaire: commentaire,
        reponseCommentaire: reponseCommentaire
    });

    // Return result
    return reservation;
}

/**
 * Create a random reservation.
 * @param {String} etat 
 * @returns {ReservationModel}
 */
function createRandomReservation(etat = "Terminee") {
    // 3 Cases
    // 1 -> Reservation ended (now > datefin & payed)
    // 2 -> Reservation confirmed (now > datedebut & payed)
    // 3 -> Reservation in progress (now > datedebut & now < datefin & payed)

    // Deal with it boys
    dateMin = new Date(2020, 1, 1);
    dateMax = new Date(2024, 2, 15);

    // Switch on state to fix dates
    switch(etat) {
        // Case 1 (and default) -> Reservation ended
        default:
        case 'Terminee':
            dateDebut = fakerator().date.between(dateMin, dateMax);
            dateFin = addDays(dateDebut, fakerator().random.number(1, 10));
            break;

        // Case 2 -> Reservation confirmed
        case 'Confirmee':
            dateDebut = fakerator().date.recent(5);
            dateFin = addDays(Date.now(), fakerator().random.number(1, 10));
            break;

        // Case 3 -> Reservation in progress
        case 'En cours':
            dateDebut = addDays(Date.now(), (-1) * fakerator().random.number(1, 10));
            dateFin = addDays(Date.now(), fakerator().random.number(1, 10));
            break;
    }

    // Generate the other fields
    dateReservation = fakerator().date.between(dateMin, dateDebut);
    dateReglement = fakerator().date.between(dateDebut, dateReservation);
    tarifQuotidien = fakerator().random.number(100, 1000);
    montantTotal = tarifQuotidien * daysBetween(dateDebut, dateFin);

    // Create reservation
    let randReservation = createReservation(
        dateDebut,
        dateFin,
        tarifQuotidien,
        montantTotal,
        dateReservation,
        dateReglement,
        etat,
        fakerator().lorem.sentence(),
        fakerator().lorem.sentence()
    );

    // Return result
    return randReservation;
}

module.exports = {ReservationModel, createRandomReservation};