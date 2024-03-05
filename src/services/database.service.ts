// External Dependencies
import * as mongoDB from "mongodb"
import * as dotenv from "dotenv"

// Global Variables
export const collections: { biens?: mongoDB.Collection, tiers?: mongoDB.Collection } = {}

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();

    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING);

    await client.connect();

    const db: mongoDB.Db = client.db (process.env.DB_NAME);

    const biensCollection: mongoDB.Collection = db.collection(process.env.BIENS_COLLECTION_NAME);

    const tiersCollection: mongoDB.Collection = db.collection(process.env.TIERS_COLLECTION_NAME);

    collections.biens = biensCollection;
    
    collections.tiers = tiersCollection;

    console.log(`Connection to ${db.databaseName} successful !`); 
}