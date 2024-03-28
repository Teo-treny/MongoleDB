const createTestSetNoSql = require('./scripts/createTestSetNoSql');

// Create 5000 documents in the NoSql DB
createTestSetNoSql(50).then(() => {
    console.log("Test set created");
    process.exit(0);
});
// Exit the process
// process.exit(0);