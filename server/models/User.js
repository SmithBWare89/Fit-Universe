const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;
const bcrypt = require('bcrypt');
const Post = require('./Post');

const profileSchema = require('./schemas/profileSchema');
const strengthSchema = require('./schemas/strengthWorkout');
const cardioSchema = require('./schemas/cardioWorkout');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: 'Username is required.',
            trim: true,
            unique: true
        },
        email: {
            type: String,
            required: 'Email is required.',
            unique: true,
            match: [/.+\@.+\..+/]
        },
        password: {
            type: String,
            required: true,
            minLength: 5
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Post'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        profileInfo: [profileSchema],
        strengthWorkouts: [strengthSchema],
        cardioWorkouts: [cardioSchema]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function() {
    return this.friends.length
});

userSchema.virtual('strengthWorkoutCount').get(function() {
    return this.strengthWorkouts.length
});

userSchema.virtual('cardioWorkoutCount'). get(function() {
    return this.cardioWorkouts.length;
});

// Has User Password Before Saving
userSchema.pre('save', async function() {
    return this.password = await bcrypt.hash(this.password, 10);
});

// Hash User Password After Saving
userSchema.post('save', async function() {
    return this.password = await bcrypt.hash(this.password, 10);
})

const User = model('User', userSchema);

module.exports = User;