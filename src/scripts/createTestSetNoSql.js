const Bien = require('../noSqlModels/bien');
const createRandomBien = require('../noSqlModels/bien');
const Tiers = require('../noSqlModels/tiers');

/**
 * Create <iteration> documents in the DB
 * @param {number} iteration 
 */
function createTestSetNoSql(iteration) {
    console.log("Creating test set of " + iteration + " documents");

    for(i=0 ; i<iteration ; i++) {

    }
}

module.exports = createTestSetNoSql;