const mongoose = require('mongoose');
const { Schema } = mongoose;
const commentSchema = require('./commentsSchema');

const strengthSchema = new Schema ({
    strengthWorkoutId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    movements: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [commentSchema]
});

module.exports = strengthSchema;