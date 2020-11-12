const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },
    Mutation: {
        addStrength: async (parent, args , context) => {
            if (context.user) {
                const movementData = args.movementData;
                const workoutData = await Strength.create({movementData});
                const userData = await User.findByIdAndUpdate(
                    context.user._id,
                    {
                        $push: {
                            strengthWorkouts: workoutData.strengthWorkoutId
                        }
                    },
                    {
                        new: true
                    }
                )
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        }
    }
};

module.exports = resolvers;