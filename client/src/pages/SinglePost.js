import PostList from "../components/PostList";
import { useParams } from "react-router-dom";


import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_POST} from "../utils/queries";

const SinglePost = (props) => {
  const { id: postId } = useParams();

  const { loading, data } = useQuery(QUERY_POST, {
    variables: { id: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui card">
        <p className="header">
          <span style={{ fontWeight: 700 }} className="">
            {post.username}
          </span>{" "}
           {post.createdAt}
        </p>
        <div className="content">
          <p>{post.postText}</p>
        </div>
      </div>

      {/* {post.reactionCount > 0 && (
        <ReactionList reactions={thought.reactions} />
      )} */}

      {/* {Auth.loggedIn() && <ReactionForm thoughtId={thought._id} />} */}
    </div>
  );
};

export default SinglePost;

