const Reservation = require('../noSqlModels/reservation');

/**
 * Create <iteration> documents in the NoSqlDB
 * @param {number} iteration 
 */
function createTestSetNoSql(iteration) {
    clearTestSetNoSql();
    console.log("--> Creating test set of " + iteration + " documents");

    // for (let i = 0; i < iteration; i++) {
    // }

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