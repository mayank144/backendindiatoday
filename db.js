// getting-started.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/IndiaToday?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false'

const connectToMongo = async() => {
    mongoose.connection.name = 'NewDatabase1'
    mongoose.connect(mongoURI, () => {
        console.log("Database Successfully Connect")
    })
}
module.exports = connectToMongo;