import React from "react";
import PostForm from "../components/PostsForm"
import PostList from "../components/PostList";

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS } from "../utils/queries";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";



const Blog= () => {
  const { loading, data } = useQuery(QUERY_POSTS);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
      <h2
        className="ui block header centered"
        style={{ backgroundColor: "#508CA4", color: "#fff" }}
      >
        Blog
        <i class="rocketchat icon"></i>
      </h2>

      {/* <div className="ui segment"> */}
      {loggedIn && (
        <div>
          <PostForm />
        </div>
      )}

      
        <div className=" content four wide column">
          <h3>Posts</h3>
          <PostList posts={posts} title="Post something" />
        </div>
      
      {/* </div> */}
    </>
  );
}

export default Blog;