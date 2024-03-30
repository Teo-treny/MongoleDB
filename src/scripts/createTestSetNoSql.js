const Bien = require('../noSqlModels/bien');
const Tier = require('../noSqlModels/tier');

/**
 * Create <iteration> documents in the NoSqlDB
 * @param {number} iteration 
 */
async function createTestSetNoSql(iteration) {
    console.log("\t--> Creating test set of " + iteration + " documents");
    const startTime = performance.now();
    try {
        for (let i = 0; i < iteration; i++) {
            bien = Bien.createRandomBien(5, 5);
            tier = Tier.createRandomTier(5, 5);
            await bien.save();
            await tier.save();
        }
    } catch (error) {
        console.error(error);
    }
    const endTime = performance.now();
    console.log("\t--> Test set created in " + (endTime - startTime) + " ms");
}

/**
 * Clear all documents from the NoSqlDB
 */
async function clearTestSetNoSql() {
    console.log("\t--> Clearing test set");
    const startTime = performance.now();
    try {
        await Bien.BienModel.deleteMany({});
        await Tier.TierModel.deleteMany({});
    } catch (error) {
        console.error(error);
    }
    const endTime = performance.now();
    console.log("\t--> Test set cleared in " + (endTime - startTime) + " ms");
}

module.exports = {createTestSetNoSql, clearTestSetNoSql};