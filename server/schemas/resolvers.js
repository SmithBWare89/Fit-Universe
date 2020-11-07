const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const User = require ("../models/User");



const resolvers = {
  Query: {
    // logic here remains the same
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
    }
}
};
module.exports = resolvers;
