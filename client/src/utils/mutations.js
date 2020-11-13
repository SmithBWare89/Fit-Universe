import gql from 'graphql-tag';

export const ADD_STRENGTH = gql`mutation addStrength($movementData: String!) {
    addStrength(movementData: $movementData) {
    	createdAt
    	strengthWorkoutId
    }
}`

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      posts
      createdAt
      username
    }
  }
`;