// External dependencies
import { ObjectId } from "mongodb";

// Class Implementation
export default class Bien {
    constructor(
        public _id: string,
        public idTiers: number,
        public typeTiers: string,
        public mailTiers: string,
        public mdp: string,
        public nomTiers: string,
        public prenomTiers: string,
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
        }[]
    ) { }
}

