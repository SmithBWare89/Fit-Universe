const {Schema, model, Types} = require('mongoose');

const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        commentBody: {
            type: String,
            required: true,
            maxlength: 500,
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


const postSchema = new Schema(
    {
        postText: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 500
        },
        createdAt: {
            type: Date,
            default: Date.now
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