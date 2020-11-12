import React from "react";
import PostForm from "../components/PostsForm"
import PostList from "../components/PostList";

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_POSTS , QUERY_ME} from "../utils/queries";

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
 
  const posts = data?.posts || [];

  const loggedIn = Auth.loggedIn();

  return (
    <>
      <h2
        className="ui block header centered"
        style={{ backgroundColor: "#508CA4", color: "#fff" }}
      >
        Blog
        <i className="rocketchat icon"> </i>
      </h2>

      <div className=""> 
       {loggedIn && (
          <div>
            <PostForm />
          </div> 
        )}
        </div>

      <div>
        <div>
          <PostList posts={posts} title="Post something" />
        </div>

        <div className={` ${loggedIn && ""}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Thought(s)..." />
          )}
        </div>
      </div>
    </>
  );
}

export default Blog;