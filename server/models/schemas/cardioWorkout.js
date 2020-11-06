const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const commentSchema = require('./commentsSchema');

const cardioSchema = new Schema({
    cardioWorkoutId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
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
    },
    comments: [commentSchema]
});

module.exports = cardioSchema;