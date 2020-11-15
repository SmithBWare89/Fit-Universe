import React, { useState } from "react";
import { TextArea, Button, Form } from 'semantic-ui-react';
import { useMutation } from "@apollo/react-hooks";
import { ADD_POST } from "../utils/mutations";
import { QUERY_POSTS, QUERY_ME } from "../utils/queries";
import { Grid } from "semantic-ui-react";

const PostForm = ({refetch}) => {
  const [postText, setText] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [addPost, { error }] = useMutation(ADD_POST, {
    update(cache, { data: { addPost } }) {
      try {
        // update post array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { posts } = cache.readQuery({ query: QUERY_POSTS });
        cache.writeQuery({
          query: QUERY_POSTS,
          data: { posts: [addPost, ...posts] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      console.log(me)
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, posts: [...me.posts, addPost] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addPost({
        variables: { postText },
      });

      // clear form value
      setText("");
      setCharacterCount(0);
      refetch();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Grid
      className="ui column stackable center page grid"
      style={{ backgroundColor: "#BFD7EA" }}
    >
      <div className="four wide column"></div>

      <Form
        style={{ width: 500 }}
        className="ui form center aligned segment"
        onSubmit={handleFormSubmit}
      >
        <TextArea
          as='textarea'
          placeholder="New Post..."
          value={postText}
          className=""
          onChange={handleChange}
          style={{marginBottom: '10px', border: '2px solid var(--munsell)', resize: 'none'}}
          rows='5'
        />
        <Button
          style={{ backgroundColor: "#508CA4" ,color:"#fff"}}
          className="ui bottom attached button encourage-button"
          type="submit"
        >
          Submit
        </Button>
        <p
          className={`m-0 ${
            characterCount === 280 || error ? "text-error" : ""
          }`}
        >
          Character Count: {characterCount}/280
          {error && (
            <span className="ui error message">Something went wrong...</span>
          )}
        </p>
      </Form>
    </Grid>
  );
};

export default PostForm;
