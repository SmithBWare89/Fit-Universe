const mongoose = require('mongoose');
const { Schema, Types } = mongoose;
const commentSchema = require('./commentsSchema');

const strengthSchema = new Schema ({
    strengthWorkoutId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
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
    },
    comments: [commentSchema]
});

module.exports = strengthSchema;