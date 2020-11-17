import React, { useEffect, useState } from 'react'
import {
  Feed,
  Container,
  Icon,   
  Segment,   
  Card,
  Header,
  Button,
  Grid } from "semantic-ui-react";
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USERS } from '../utils/queries';
import Auth from '../utils/auth';
import { timeConverter } from '../utils/helpers/timeConverter';
import placeholderUser from '../images/placeholder-user.png';
import { OPEN_COMMENT_MODAL } from "../utils/actions/globalStateActions";
import CommentModal from './CommentModal';
import {useDispatch} from 'react-redux';




export default function Dashboard() {
    const dispatch = useDispatch();
    const profile = Auth.getProfile();
    const { loading, data, refetch} = useQuery(QUERY_USERS);
    const [ postFeed, setPostFeed ] = useState([]);
    let postArray = [];
    const feedStyle = {
      backgroundColor: 'var(--white)', 
      marginBottom: '10px', 
      paddingTop: '10px', 
      fontSize: '1.25em',
      borderRadius: '30px'
    };

    const segmentStyle = {
      backgroundColor: 'var(--beau)',
      borderRadius: '30px'
    }

    useEffect(() => {
      if(!data) return (<h1>Still fetching data....</h1>);

      const userData = Object.entries(data?.users)
      userData.map(user => {
        user[1].posts.map(post => {
          if (postFeed?.length === 0) {
            postArray.push(post)
            setPostFeed(postArray);
          } 
          else if (post?.createdAt < postFeed[0]?.createdAt) {
            postArray.unshift(post)
            setPostFeed(postArray);
          } else {
            postArray.push(post)
            setPostFeed(postArray);
          }
        })
      });
      console.log(postFeed)
    }, [data])

    return (
      <Container>
        <Segment raised style={segmentStyle}>
          <Header as='h1' textAlign='center'>
            Recent Posts and Workouts
          </Header>
          <Feed size='large'>
          {
            postFeed.length > 0 && postFeed.map(post => (
              <Feed.Event>
                <Feed.Label style={{width: '4.0em !important'}}>
                  <img src={placeholderUser} />
                </Feed.Label>
                <Feed.Content>
                  <Feed.Summary style={{fontSize: '1.15rem'}}>
                    <Feed.User>{post.username}</Feed.User> made a post.
                    <Feed.Date>{timeConverter(post.createdAt)}</Feed.Date>
                  </Feed.Summary>
                  <Card
                    to={`/blog/${post.username}`}
                    key={post._id}
                    raised={true}
                  >
                    <Card.Content style={{backgroundColor:'var(--munsell)'}}>
                      <Card.Description as='p' style={{fontSize: '1.15rem', wordWrap: 'break-word', color: 'var(--white)'}}>
                          {post.postText}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                  <Feed.Meta>
                    <Grid>
                      <Grid.Row>
                        <Feed.Like>
                          <Icon name='heart' size='big'/>
                        </Feed.Like>
                        <Button
                          style={{ backgroundColor: "var(--munsell)" , color:"#fff"}}
                          className="ui bottom attached button comment-button"
                          type="submit"
                          onClick={(e) => {
                            
                            dispatch({type: OPEN_COMMENT_MODAL, commentModalPostData: post})
                          }}
                        >
                          Comment
                        </Button>
                      </Grid.Row>
                    </Grid>
                  </Feed.Meta>
                </Feed.Content>
              </Feed.Event>
            ))
          }
          </Feed>
        </Segment>
        <CommentModal />
      </Container>
    );
}