const mongoose = require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema({
    age: {
        type: Number,
        minLength: 2
    },
    height: {
        type: Array,
    },
    weight: {
        type: Number
    },
    state: {
        type: String
    },
    aboutMe: {
        type: String
    },
    favoriteActivity: {
        type: String
    }
})

module.exports = profileSchema;