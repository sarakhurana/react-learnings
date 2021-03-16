import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { createPost } from "../../store/actions";
import uuid from "react-uuid";
import "./createPost.css";

const CreatePost = ({isCreatePost, setCreatePost}) => {
  const { dispatch } = useContext(Context);
  // const [isCreatePost, setCreatePost] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  // const handleCreatePostClick = () => {
  //   setCreatePost(true);
  // };

  const handleDispatchClick = () => {
    setCreatePost(false)
    dispatch(
      createPost({
        title: postTitle,
        body: postBody,
        postId: uuid(),
        isFavourite: false,
        isEditMode: false,
      })
    )
  };
  return (
    <>
      {isCreatePost ? (
        <div className="create-post-container">
          <input
            className="text-post-title"
            data-testid="test-post-title"
            type="text"
            name="Title"
            placeholder="Enter Title"
            onChange={(event) => setPostTitle(event.target.value)}
          ></input>
          <input
            className="text-post-body"
            data-testid="test-post-body"
            name="Post"
            placeholder="Enter Post"
            onChange={(event) => setPostBody(event.target.value)}
          ></input>
          <button
            className="btn-post"
            onClick={handleDispatchClick}
          >
            Post
          </button>
        </div>
      ) : (
        <></>
        // <div className="create-post-btn-container">
        //   <span className="text-new-post">Write a new post!</span>
        //   <button
        //     className="btn-create-post"
        //     data-testid="test-create-button"
        //     onClick={handleCreatePostClick}
        //   >
        //     Create post
        //   </button>
        // </div>
      )}
    </>
  );
};

export default CreatePost;
