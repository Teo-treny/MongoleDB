require('dotenv').config();
const mongoose = require('mongoose');

console.log(process.env.URL_MONGODB)

mongoose.connect(process.env.URL_MONGODB)
    .then(() => console.log('Connected to database'))
    .catch(err => console.error('Could not connect to database', err));

module.exports = mongoose;