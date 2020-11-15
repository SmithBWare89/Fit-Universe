import gql from 'graphql-tag';

export const ADD_STRENGTH = gql`mutation addStrength($movementData: String!) {
    addStrength(movementData: $movementData) {
      movementData
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
      postText
      createdAt
      username
      
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($postId: ID!, $commentBody: String!) {
    addComment(postId: $postId, commentBody: $commentBody) {
      postText
      createdAt
      username
      comments {
        commentBody
        commentId
        createdAt
      }
    }
  }
`;
