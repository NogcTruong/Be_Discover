const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true,
    },

    email: {
        type: String,
        require: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
        unique: true,
    },
    user_type: {
        type: String,
        require: true,
    },
})
module.exports = mongoose.model('User', UserSchema);