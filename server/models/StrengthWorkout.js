const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;
const commentSchema = require('./schemas/commentsSchema');

const strengthSchema = new Schema ({
    strengthWorkoutId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    movementData: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Strength = model('Strength', strengthSchema);

module.exports = Strength;