import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { createPost } from "../../store/actions";
import uuid from 'react-uuid'
import "./createPost.css";

const CreatePost = () => {
  const { dispatch } = useContext(Context);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  return (
    <div className="create-post-container">
      <label>Title</label>
      <input
        className="text-post-title"
        type="text"
        name="Title"
        placeholder="Enter Title"
        onChange={(event) => setPostTitle(event.target.value)}
      ></input>
      <input
        className="text-post-body"
        name="Post"
        placeholder="Enter Post"
        onChange={(event) => setPostBody(event.target.value)}
      ></input>
      <button
        className="btn-create-post"
        onClick={() =>
          dispatch(createPost({ title: postTitle, body: postBody, postId: uuid(), isFavourite:false}))
        }
      >
        Create Post
      </button>
    </div>
  );
};

export default CreatePost;
