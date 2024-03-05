
// import { MongoClient, Db } from 'mongodb';

// let db: Db;

// async function connectToDatabase() {
//     const uri = 'mongodb://localhost:27017'; // URI de connexion à MongoDB
//     const client = new MongoClient(uri);

//     try {
//         await client.connect(); // Connexion au serveur MongoDB
//         console.log('Connecté à la base de données MongoDB');

//         db = client.db('nom_de_votre_base_de_donnees'); // Sélection de la base de données
//     } catch (error) {
//         console.error('Erreur lors de la connexion à la base de données :', error);
//     }
// }

function CreationRéservation(client_id: number,bien_id: number,date_debut: Date,date_fin: Date){
    let is_unavailable: Boolean;
    let montant_total: Number;

    // Vérifier si le bien la réservation est pour une date de début antérieure à la date de fin
    if(date_debut >= date_fin){
        console.log('La date de début doit être antérieure à la date de fin.');
    }

    // Vérifier si la date de début est dans le futur
    if(date_debut < new Date()){
        console.log('La date de début doit être dans le futur.');
    }

    // Vérifier si le bien est disponible pour les dates spécifiées

} 