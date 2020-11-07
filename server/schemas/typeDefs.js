// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User]
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
  }
  type User {
    _id: ID
    username: String
    email: String
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
