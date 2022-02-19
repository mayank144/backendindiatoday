const mongoose = require('mongoose')
const { Schema } = mongoose;
const ProfileSchema = new Schema({
    Username: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    Email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true,
        minlength: 1,
        maxlength: 255
    },
    Password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 255
    },
    Phone_Number: {
        type: String,
        required: true,
        length: 10
    },
    Date_of_Birth: {
        type: Date,
        required: true
    },
    Time_of_Birth: {
        type: Date,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        default: 'male',
        enum: ['male', 'female']
    },
    Marital_Status: {
        type: String,
        required: true,
        default: 'married',
        enum: ['married', 'unmarried', 'others']
    },
    Language: {
        type: String,
        required: true,
        default: 'english',
        enum: ['hindi', 'english']
    },
    Profile_picture: {
        type: String,
        required: false
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
}, {
    timestamps: true
});
const Profile = mongoose.model('profile', ProfileSchema)
module.exports = Profile