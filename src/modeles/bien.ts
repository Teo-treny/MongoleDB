// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Bien {
    constructor(
        public _id: string,
        public adresseBien: string,
        public reservations: {
            dateDebut: Date;
            dateFin: Date;
            dateReglement: Date;
            dateReservation: Date;
            etat: string;
            idBien: number;
            idCommentaire: number;
            idReservation: number;
            idTiers: number;
            montantTotal: number;
            question: string;
            tarifQuotidien: number;
        }[],
        public villeBien: string,
        public calendriers: {
            date: Date;
            etat: string;
            idBien: number;
            tarifJournalier: number;
        }[],
        public tarifBase: number,
        public typeLocation: string,
        public cpBien: number,
        public idBien: number
    ) { }
    
}