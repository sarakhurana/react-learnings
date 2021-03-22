import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { editPost } from "../../store/actions";
import "./createPost.css";

const EditPost = ({ postId, setIsEditPost}) => {
  const { dispatch } = useContext(Context);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const handleEditClick=()=>{
    setIsEditPost(false)
    dispatch(editPost({ title: postTitle, body: postBody, postId: postId, isEditMode: false}))
  }
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
        className="btn-post"
        onClick={handleEditClick}
      >
        Save Post
      </button>
    </div> 
  );
};

export default EditPost;
