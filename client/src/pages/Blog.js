import React, { useEffect, useState } from "react";
import PostForm from "../components/PostsForm"
import PostList from "../components/PostList";

import Auth from '../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
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
  const profile = Auth.getProfile();
  const { loading, data, refetch } = useQuery(QUERY_POSTS, {variables: {username: profile.data.username}});
  const [posts, setPosts] = useState('');

  useEffect(() => {
    setPosts(data?.posts?.posts);
  }, [useQuery, data])

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
                <PostForm refetch={refetch}/>
              </div>
            )}
          </div>
        </Grid.Column>

        <Grid.Column width={8} style={{ backgroundColor: "#BFD7EA" }}>
          <div>
            <PostList posts={posts} title="Post" />
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Blog;