const mongoose = require('mongoose');
const { Schema } = mongoose;

const strengthSchema = new Schema ({
    movementName: {
        type: String,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    rep: {
        type: Number,
        required: true,
        trim: true
    },
    weight: {
        type: Number,
        required: true,
        trim: true
    }
});

module.exports = strengthSchema;