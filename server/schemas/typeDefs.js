const { gql } = require('apollo-server-express');
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
  }
  type Post {
    _id: ID
    postText: String
    createdAt: String
    username: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Strength {
    strengthWorkoutId: ID
    movementData: String!
    createdAt: String
  }

  type Comments {
    commendId: ID
    commentBody: String
    username: String
    createdAt: String
  }

  type CardioWorkout {
    cardioWorkoutId: ID
    heartRate: Int
    createdAt: String
    time: Int
    distanceTraveled: Int
    pace: Int
    comments: [Comments]
  }

  type User {
    _id: ID
    username: String
    email: String
    posts: [String]
    friends: [String]
    strengthWorkouts: [Strength]
    cardioWorkouts: [CardioWorkout]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    addStrength(movementData: String!): Strength
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postText: String!): Post
    addFriend(friendId: ID!): User
  }
 
    
  

  

 
`;

module.exports = typeDefs;
