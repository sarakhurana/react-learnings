import React, { useContext, useEffect, useRef, useState } from "react";
import CreatePost from "../../containers/post/CreatePost";
import DeletePost from "../../containers/post/DeletePost";
import FavouritePost from "../../containers/post/FavouritePost";
import { Context } from "../../context/Context";
import "./postView.css";
import { fetchPosts } from "../../store/actions";
import EditPost from "../../containers/post/EditPost";

const PostView = () => {
  const { state, dispatch } = useContext(Context);
  const getPostRef = useRef(false);
  const [isEditPost, setIsEditPost] = useState(false);
  const [isCreatePost, setCreatePost] = useState(false);

  const handleClick = (post) => {
    post.isEditMode = true;
    setIsEditPost(true);
  };
  const handleCreatePostClick = () => {
    setCreatePost(true);
  };

  useEffect(() => {
    if (!getPostRef.current) {
      fetchPosts(dispatch);
      getPostRef.current = true;
    }
  }, [getPostRef]);
  return (
    <div className="post-view-container">
      <div className="header">
        <div className="title">Blog App</div>
        <div className="header-create-post">
          <button
            className="btn-create-post"
            data-testid="test-create-button"
            onClick={handleCreatePostClick}
          >
            Create post
          </button>
        </div>
      </div>
      <CreatePost setCreatePost={setCreatePost} isCreatePost={isCreatePost} />
      <div className="post-container">
        {state.post.posts.map((post, index) => {
          return (
            <li key={index}>
              <div className="post-content">
                <div className="post-title">{post.title} </div>
                <div className="post-body">{post.body}</div>
              </div>
              <div className="post-controls">
                <span>
                  <FavouritePost postId={post.postId} />
                </span>
                <span>
                  <DeletePost postId={post.postId} />
                </span>
                <span>
                  <button
                    className="post-btn"
                    onClick={() => handleClick(post)}
                  >
                    Edit
                  </button>
                </span>
                {post.isEditMode && (
                  <EditPost
                    postId={post.postId}
                    setIsEditPost={setIsEditPost}
                  />
                )}
              </div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
