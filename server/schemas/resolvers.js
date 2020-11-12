const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {

    },
    Mutation: {
        addStrength: async (parent, args , context) => {
            const movementData = args.movementData;
            const workoutData = await Strength.create({movementData});
            return workoutData;
        }
    }
};

module.exports = resolvers;