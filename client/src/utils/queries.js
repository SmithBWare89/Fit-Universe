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
    
      }
    }
  }
`;