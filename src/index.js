const scripts = require('./scripts/createTestSetNoSql');

console.log('--- Running ' + process.argv[2] + ' script ---');

switch (process.argv[2]) {
    case 'create':
        if (process.argv[3] === undefined) {
            console.log('No amount of documents specified, using default 50');
            amount = 50;
        }
        else amount = process.argv[3];

        scripts.createTestSetNoSql(amount).then(() => {
            console.log("Test set created");
            process.exit(0);
        });
        break;

    case 'wipe':
        scripts.clearTestSetNoSql().then(() => {
            console.log("Test set cleared");
            process.exit(0);
        });
        break;

    default:   
        console.log('No script found, use either create or wipe\n-> npm run create <document amount>\n-> npm run wipe');
        process.exit(0);
        break;
}