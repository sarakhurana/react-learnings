import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { editPost } from "../../store/actions";
import "./createPost.css";

const EditPost = ({ postId}) => {
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
          dispatch(editPost({ title: postTitle, body: postBody, postId: postId, isEditMode: false}))
        }
      >
        Save Post
      </button>
    </div> 
  );
};

export default EditPost;
