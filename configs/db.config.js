const mongoose = require('mongoose');

const DB_NAME = process.env.DB_NAME || 'proyecto-modulo2'
const MONGODB_URI = `mongodb://localhost:27017/${DB_NAME}`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        console.info(`Connected to the database: ${MONGODB_URI}`)
    })
    .catch(error => {
        console.error('Database connection error:', error);
    });