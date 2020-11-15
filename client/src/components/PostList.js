import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "semantic-ui-react";;

const PostList = ({ posts, title }) => {
  if (!posts) {
    return (
      <h3 className="" style={{}}>
      No Posts Yet...
      </h3>
    );
  }
  

  return (
    <>
      <div className="" >
        <h3>{title}</h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="ui raised card">
              <p className="">
                <div
                  to={`/blog/${post.username}`}
                  style={{ fontWeight: 700 }}
                  className=""
                >
                  {post.username}
                </div>{" "}
                {post.createdAt}
              </p>

              <div className="ui raised card">
                <Container to={`/post/${post._id}`}>
                  <p>{post.postText}</p>
                </Container>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default PostList;
