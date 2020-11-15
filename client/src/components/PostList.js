import React  from "react";
import { Card, Button, Transition } from "semantic-ui-react";;

const PostList = ({ posts, title }) => {
  if (!posts) {
    return (
      <h3 className="" style={{}}>
      No Posts Yet...
      </h3>
    );
  }

  function timeConverter(UNIX_timestamp){
    const correctTime = UNIX_timestamp/1000;
    const a = new Date(correctTime * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours() - 12;
    const AMPM = a.getHours() > 12 ? `PM` : `AM`;
    const min = a.getMinutes();
    const time = `${month} ${date} ${year} at ${hour}:${min} ${AMPM}`
    return time;
  }

  return (
    <Card.Group>
      <Transition.Group
        animation='fade up'
        duration='500'
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
                        >
                          Comment
                        </Button>
                      </div>
                    </Card.Content>
                </Card>
            ))
        }
      </Transition.Group>
    </Card.Group>
  );
};

export default PostList;
