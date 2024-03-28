const Bien = require('../noSqlModels/bien');

/**
 * Create <iteration> documents in the NoSqlDB
 * @param {number} iteration 
 */
async function createTestSetNoSql(iteration) {
    clearTestSetNoSql();
    console.log("--> Creating test set of " + iteration + " documents");

    try {
        for (let i = 0; i < iteration; i++) {
            bien = Bien.createRandomBien(5, 5);
            await bien.save();
        }
    } catch (error) {
        console.error(error);
    }
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