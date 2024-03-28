const Bien = require('../noSqlModels/bien');
const Tiers = require('../noSqlModels/tiers');

/**
 * Create <iteration> documents in the NoSqlDB
 * @param {number} iteration 
 */
function createTestSetNoSql(iteration) {
    clearTestSetNoSql();
    console.log("--> Creating test set of " + iteration + " documents");

    for (let i = 0; i < iteration; i++) {
    }

    let bien = Bien.createRandomBien(5,2);
    console.log(bien);

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