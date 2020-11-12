const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
      users: async () => {
      return User.find()
        .select('-__v -password')
    
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
  },
},

  Mutation: {
    addUser: async (parent, args) => {
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      console.log("trying to login");
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
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
