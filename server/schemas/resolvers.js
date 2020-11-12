<<<<<<< HEAD
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const User = require ("../models/User");
const Post = require("../models/Post");


=======
const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');
>>>>>>> 631079c4ccb17b2f62252ae226917dd55178f562

const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password".populate("posts")
        );

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password").populate("posts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("posts");
    },
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
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
<<<<<<< HEAD
<<<<<<< HEAD
    addPost: async (parent, args, context) => {
      console.log(args, context);
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        return post;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
=======
=======
>>>>>>> 631079c4ccb17b2f62252ae226917dd55178f562
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
>>>>>>> 631079c4ccb17b2f62252ae226917dd55178f562
};
module.exports = resolvers;
