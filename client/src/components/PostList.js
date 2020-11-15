import React, { useEffect }  from "react";
import {useDispatch} from 'react-redux';
import { Card, Button, Transition } from "semantic-ui-react";
import { OPEN_COMMENT_MODAL } from "../utils/actions/globalStateActions";
import CommentModal from './CommentModal';
import {timeConverter} from '../utils/helpers/timeConverter';

const PostList = ({ posts, title }) => {
  const dispatch = useDispatch(); 

  if (!posts) {
    return (
      <h3 className="" style={{}}>
      No Posts Yet...
      </h3>
    );
  }

  return (
    <Card.Group>
      <Transition.Group
        animation='fade up'
        duration='800'
      >
        {
            posts && posts.map((post) => (
                <Card
                  to={`/blog/${post.username}`}
                  key={post._id}
                  raised={true}
                >
                    <Card.Content>
                        <Card.Header>
                            {title}
                        </Card.Header>
                        <Card.Meta>
                            Created {timeConverter(post.createdAt)}
                        </Card.Meta>
                        <Card.Description as='p' style={{fontSize: '1.05rem', wordWrap: 'break-word'}}>
                          {post.postText}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className='ui two buttons'>
                        <Button
                          style={{ backgroundColor: "var(--munsell)" ,color:"#fff"}}
                          className="ui bottom attached button comment-button"
                          type="submit"
                          onClick={(e) => {
                            dispatch({type: OPEN_COMMENT_MODAL, commentModalPostData: post})
                          }}
                        >
                          Comment
                        </Button>
                      </div>
                    </Card.Content>
                </Card>
            ))
        }
      </Transition.Group>
      <CommentModal title={title}/>
    </Card.Group>
  );
};

export default PostList;
