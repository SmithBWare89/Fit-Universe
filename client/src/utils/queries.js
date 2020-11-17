import gql from "graphql-tag";


export const QUERY_POSTS = gql`
query posts($username: String) {
    posts(username: $username) {
			username
    	email
    	posts {
        _id
        postText
        createdAt
        username
      }
    }
}
`;

export const QUERY_POST = gql`
  query post($id: ID!) {
    post(_id: $id) {
      _id
      postText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
      }
      strengthWorkouts {
        strengthWorkoutId
        movementData
        createdAt
        comments
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      posts {
        _id
        postText
        createdAt
        username
        comments {
          _id
          commentBody
          createdAt
          username
        }
      }
      strengthWorkouts {
        strengthWorkoutId
        movementData
        createdAt
        comments {
          _id
          commentBody
          createdAt
        }
      }
    }
  }
`;

export const QUERY_ME = gql`
{
    me {
      _id
      username
      email
      posts {
        _id
        postText
        createdAt
        comments {
          _id
          commentBody
          createdAt
        }
      }
      strengthWorkouts {
        strengthWorkoutId
        movementData
        createdAt
        comments {
          _id
          commentBody
          createdAt
        }
      }
    }
  }
`;

export const QUERY_WORKOUTS = gql`
query workouts($username: String!) {
    workouts(username: $username) {
      _id
      username
			strengthWorkouts {
        strengthWorkoutId
        movementData
        createdAt
        comments {
          createdAt
          commentBody
          _id
        }
      }
    }
  }
`;

export const QUERY_WORKOUT = gql`
  query workout($_id: ID!) {
    workout(_id: $_id) {
      _id
      strengthWorkoutId
      movementData
      createdAt
      username
    }
  }
`