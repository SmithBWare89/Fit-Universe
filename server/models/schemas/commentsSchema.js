const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        commentBody: {
            type: String,
            required: true,
            maxlength: 280,
            trim: true
        },
        username: {
            type: String,
            required: true,
            trim: true,

        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = commentSchema;