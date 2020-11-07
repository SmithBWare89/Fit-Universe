const {Schema, model, Types} = require('mongoose');
const moment = require('moment');


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
            default: Date.now,
            get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);
const commentSchema = require('./schemas/commentsSchema');

const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

postSchema.virtual('commentCount').get(function() {
    return this.comments.length;
});

const Post = model('Post', postSchema);

module.exports = Post;