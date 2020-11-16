const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User
          .findOne({ _id: context.user._id })
          .select(["-password", '-__v'])
          .populate({path: 'posts'})
          .populate({path: 'strengthWorkouts'})

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async (parent, args, context) => {
      return await User.find()
        .select(["-password", '-__v'])
        .populate({ path: 'posts', populate: { path: 'comments' }})
        .populate({ path: 'strengthWorkouts', populate: { path: 'comment' }});
    },
    user: async (parent, { username }) => {
      console.log(username)
      return await User.findOne({ username })
        .select("-password")
        .populate("posts");
    },
    posts: async (parent, { username }) => {
      const userData = await User
        .findOne({username})
        .select(['-password', '-friends', '-profileInfo', '-strengthWorkouts', '-__v'])
        .populate({ path: 'posts', populate: { path: 'comments' }});
      return userData;
    },
    post: async (parent, { _id }) => {
      return await Post.findOne({ _id });
    },
    workouts: async (parent, { username }, context) => {
      if (context.user) {
        const userData = await User
          .findOne({username})
          .select(['-email', '-password', '-__v', '-friends', '-profileInfo'])
          .populate({path: 'strengthWorkouts', populate: {path: 'comments'}});
        return userData;
      }
      throw new AuthenticationError('You must be logged in first.');
    },
    workout: async(parents, { _id }, context) => {
      const workoutData = await Strength.findOne({ _id });
      return workoutData;
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await bcrypt.compare(password, user.password)

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    addStrength: async (parent, args , context) => {
          if (context.user) {
            const strengthWorkout = await Strength
              .create({ movementData: args.movementData, username: context.user.username})
              
            const userData = await User
              .findOneAndUpdate (
                { username: args.username },
                { $push: { strengthWorkouts: strengthWorkout._id } },
                { new: true }
              )
              .select(['-__v', '-password'])
              .populate('strengthWorkout');
              return strengthWorkout;
          }
          throw new AuthenticationError('You must be logged in.');
    },
    addPost: async (parent, args, context) => {
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });

        const userData = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        console.log(userData);

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    addComment: async (parent, {postId, commentBody}, context) => {
      if(context.user) {
        const post = await Post.findByIdAndUpdate(
          { _id: postId},
          { $push: { comments: { commentBody, username: context.user.username }}},
          { new: true}
        ).populate('comments')
        return post;
      }
    }
  } 
};
module.exports = resolvers;
