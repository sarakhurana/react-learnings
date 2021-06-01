import React, { useContext, useState } from "react";
import ReactModal from "react-modal";
import { useLocation } from "react-router";
import DeletePost from "../../containers/post/DeletePost";
import EditPost from "../../containers/post/EditPost";
import FavouritePost from "../../containers/post/FavouritePost";
import { Context } from "../../context/Context";
import usePostDetails from "./usePostDetails";

const SinglePostView = () => {
  const [isEditPost, setIsEditPost] = useState(false);
  const handleClick = (post) => {
    post.isEditMode = true;
    setIsEditPost(true);
  };
  const location = useLocation();
  let { postId } = location.state;
  const { findPost } = usePostDetails();
  const post = findPost(postId)

  return (
    <>
      {post ? (
        <div className="single-post-view">
          <div className="post-image">
            {post.image && <img src={post.image} alt={post.body}></img>}
          </div>
          <div className="post-body">{post.body}</div>
          <div className="post-controls">
            <span>
              <FavouritePost postId={post.postId} />
            </span>
            <span>
              <DeletePost postId={post.postId} />
            </span>
            <span>
              <button className="post-btn" onClick={() => handleClick(post)}>
                Edit
              </button>
            </span>
            <ReactModal
              className="modal-container"
              overlayClassName="modal-overlay"
              isOpen={post.isEditMode && isEditPost}
              ariaHideApp={false}
              onRequestClose={() => setIsEditPost(false)}
            >
              <EditPost post={post} setIsEditPost={setIsEditPost} />
            </ReactModal>
          </div>
        </div>
      ) : (
        <div>This post has been deleted</div>
      )}
    </>
  );
};

export default SinglePostView;
