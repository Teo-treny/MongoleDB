const Bien = require('../noSqlModels/bien');
const Tiers = require('../noSqlModels/tiers');

/**
 * Create <iteration> documents in the NoSqlDB
 * @param {number} iteration 
 */
function createTestSetNoSql(iteration) {
    console.log("Creating test set of " + iteration + " documents");

    let bien = Bien.createRandomBien();
    bien.save();

}

module.exports = createTestSetNoSql;