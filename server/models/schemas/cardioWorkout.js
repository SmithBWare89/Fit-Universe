const mongoose = require('mongoose');
const { Schema } = mongoose;

const cardioSchema = new Schema({
    heartRate: {
        type: Number,
        trim: true,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    time: {
        type: Number,
        trim: true,
        required: true
    },
    distanceTraveled: {
        type: Number,
        trim: true,
        default: 0
    },
    pace: {
        type: Number,
        trim: true,
        default: 0
    }
});

module.exports = cardioSchema;