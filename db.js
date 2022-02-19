// getting-started.js
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();
const mongoURI = process.env.MONGODB_CONNECTION_STRING

const connectToMongo = async() => {
    mongoose.connection.name = 'NewDatabase1'
    mongoose.connect(mongoURI, () => {
        console.log("Database Successfully Connect")
    })
}
module.exports = connectToMongo;