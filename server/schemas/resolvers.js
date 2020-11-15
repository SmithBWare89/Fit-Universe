const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Strength } = require('../models');
const { signToken } = require('../utils/auth');
const bcrypt = require('bcrypt');

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
      const userData = await User.findOne({username}).populate({ path: 'posts'});
      console.log(userData)
      return userData;
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
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
    addStrength: async (parent, {movementData} , {user}) => {
          const {email} = user;
          if(email) {
            const strengthWorkout = await Strength.create({movementData});
            const {strengthWorkoutId} = strengthWorkout;
            const userData = await User.findOneAndUpdate(
              {email}, {$push: { strengthWorkouts: strengthWorkoutId } }, { new: true });
            console.log(userData);
          }
    },
    addPost: async (parent, args, context) => {
      console.log(args, context.user);
      if (context.user) {
        const post = await Post.create({
          ...args,
          username: context.user.username,
        });
        console.log(post)
        const userData = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { posts: post._id } },
          { new: true }
        );

        console.log(userData);

        return post;
      }
      throw new AuthenticationError("You need to be logged in!");
    }
  } 
};
module.exports = resolvers;
