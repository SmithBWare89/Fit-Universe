const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Mutation: {
        addStrength: async (parent, {id, workout}, context) => {
            const user = await User.findOneAndUpdate(
                {
                    _id: id
                }
            ),
            {
                $push: {
                    strengthWorkouts: {
                        movements: [workout]
                    }
                }
            };
            
            return user;
        }
    }
};

module.exports = resolvers;