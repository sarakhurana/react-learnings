import React, { useContext, useEffect, useRef, useState } from "react";
import CreatePost from "../../containers/post/CreatePost";
import DeletePost from "../../containers/post/DeletePost";
import FavouritePost from "../../containers/post/FavouritePost";
import { Context } from "../../context/Context";
import "./postView.css";
import { fetchPosts } from "../../store/actions";
import EditPost from "../../containers/post/EditPost";
import ReactModal from "react-modal";
import UploadImage from "./UploadImage";
import img from "../../assets/image1.jpeg";

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
        <div className="header-title-elements">
          <div className="lady"></div>
        <div className="title"></div>
        <div className="likes-photo"></div>
        </div>
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
      <ReactModal
        className="modal-container"
        overlayClassName="modal-overlay"
        isOpen={isCreatePost}
        ariaHideApp={false}
        onRequestClose={() => setIsCreatePost(false)}
      >
        <CreatePost setCreatePost={setCreatePost} isCreatePost={isCreatePost} />
      </ReactModal>
      <div className="post-container">
        {state.post.posts.map((post, index) => {    
             return( <li key={index}>
                <div className="post-content">
                  <div className="post-title">{post.title} </div>
                  <div className="post-image">
                    {post.image && (
                      <img src={post.image} alt={post.title}></img>
                    )}
                  </div>
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
                  <ReactModal
                    className="modal-container"
                    overlayClassName="modal-overlay"
                    isOpen={post.isEditMode && isEditPost}
                    ariaHideApp={false}
                    onRequestClose={() => setIsEditPost(false)}
                  >
                    <EditPost
                      postId={post.postId}
                      setIsEditPost={setIsEditPost}
                    />
                  </ReactModal>
                </div>
              </li>
            );
        })}
      </div>
    </div>
  );
};

export default PostView;
