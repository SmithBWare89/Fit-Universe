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
        style={{ backgroundColor: "#508CA4", color: "#fff", marginTop: -15}}
      >
        Blog
      </h2>

      <Grid>
        <Grid.Column
          width={8}
          className=""
          style={{ backgroundColor: "#BFD7EA" }}
        >
          <div>
            {loggedIn && (
              <div>
                <PostForm />
              </div>
            )}
          </div>
        </Grid.Column>

        <Grid.Column width={8} style={{ backgroundColor: "#BFD7EA" }}>
          <div>
            <PostList posts={posts} title="Post" />
          </div>

          {/* <div className={` ${loggedIn && ""}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="Some Feed for Thought(s)..." />
          )}
        </div> */}
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Blog;