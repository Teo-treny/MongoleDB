
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


function createRandomReservation(etat = "Terminee") {
    // 3 Cas
    // 1 -> Reservation terminée (now > datefin et payée)
    // 2 -> Reservation confirmée (now < datedebut et payée)
    // 3 -> Reservation en cours (now > datedebut et now < datefin et payée)

    // Cas 1 -> Reservation terminée
    if (etat = "Terminee") {
        // Completement arbitraire, deal with it boys
        dateDebut = fakerator().date.between(new Date(2020, 1, 1), new Date(2024, 2, 15));
        dateFin = addDays(dateDebut, fakerator().random.number(1, 10));

        
    }


    console.log(dateDebut);
    console.log(dateFin);
}

module.exports = {ReservationModel, createRandomReservation};