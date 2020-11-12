const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Mutation: {
        addStrength: async (parent, args) => {
            const workout = args.workout;
            const user = await User.findOneAndUpdate(
                {
                    _id: args.id
                }
            ),
            {
                $push: {
                    strengthWorkouts: {
                        movements: workout
                    }
                }
            }
        }
    }
}