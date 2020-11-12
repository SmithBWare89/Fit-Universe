import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ posts, title }) => {

  
  // if (!posts.length) {
  //   return (
  //     <h3 className="" style={{}}>
      
  //     </h3>
  //   );
  // }

  return (
    <>
      {/* <div className="" >
        <h3>{title}</h3>
        {posts &&
          posts.map((post) => (
            <div key={post._id} className="ui raised card">
              <p className="header">
                <Link
                  to={`/dashboard/${post.username}`}
                  style={{ fontWeight: 700 }}
                  className=""
                >
                  {post.username}
                </Link>{" "}
                {post.createdAt}
              </p>

              <div className="ui raised card">
                <Link to={`/post/${post._id}`}>
                  <p>{post.postText}</p>
                </Link>
              </div>
            </div>
          ))}
      </div> */}


      
    </>
  );
};

export default PostList;
