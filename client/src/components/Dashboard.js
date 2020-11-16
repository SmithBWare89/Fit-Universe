import React, { useEffect, useState } from 'react'
import MenuSidebar from "../components/MenuSidebar";
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
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS } from '../utils/queries';
import Auth from '../utils/auth';
import timeConvert, { timeConverter } from '../utils/helpers/timeConverter';

export default function Dashboard() {
    const profile = Auth.getProfile();
    const { loading, data, refetch} = useQuery(QUERY_USERS);
    const [ postFeed, setPostFeed ] = useState([]);
    let postArray = []

    // if(!loading) {
    //   if(!data) return (<h1>Still fetching data....</h1>);

    //   const userData = Object.entries(data?.users)
    //   userData.map(user => {
    //     user[1].posts.map(post => {
    //       if (postFeed?.length === 0) {
    //         postArray.push(post)
    //         setPostFeed(postArray);
    //       } 
    //       else if (post?.createdAt > postFeed[0]?.createdAt) {
    //         postArray.unshift(post)
    //         setPostFeed(postArray);
    //       } else {
    //         postArray.push(post)
    //         setPostFeed(postArray);
    //       }
    //     })
    //   });
    // }

    useEffect(() => {
      if(!data) return (<h1>Still fetching data....</h1>);

      const userData = Object.entries(data?.users)
      userData.map(user => {
        user[1].posts.map(post => {
          if (postFeed?.length === 0) {
            postArray.push(post)
            setPostFeed(postArray);
          } 
          else if (post?.createdAt > postFeed[0]?.createdAt) {
            postArray.unshift(post)
            setPostFeed(postArray);
          } else {
            postArray.push(post)
            setPostFeed(postArray);
          }
        })
      });
    }, [data])

    return (
        <>
          {postFeed & postFeed.map(post => console.log(post))}
        </>
    );
}