const Bien = require('../noSqlModels/bien');

/**
 * Create <iteration> documents in the NoSqlDB
 * @param {number} iteration 
 */
function createTestSetNoSql(iteration) {
    clearTestSetNoSql();
    console.log("--> Creating test set of " + iteration + " documents");

    console.log(Bien.createRandomBien(2, 2));
}

/**
 * Clear all documents from the NoSqlDB
 */
function clearTestSetNoSql() {
    console.log("--> Clearing test set");
    /*Bien.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
    });
    Tiers.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        }
    });*/
}

module.exports = createTestSetNoSql;