import React, { useContext, useEffect, useRef, useState } from "react";
import CreatePost from "../../containers/post/CreatePost";
import { Context } from "../../context/Context";
import "./postView.css";
import { fetchPosts } from "../../store/actions";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";

const PostView = () => {
  const { state, dispatch } = useContext(Context);
  const getPostRef = useRef(false);
  const [isCreatePost, setCreatePost] = useState(false);

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
            Create Post
          </button>
        </div>
      </div>
      <ReactModal
        className="modal-container"
        overlayClassName="modal-overlay"
        isOpen={isCreatePost}
        ariaHideApp={false}
        onRequestClose={() => setCreatePost(false)}
      >
        <CreatePost setCreatePost={setCreatePost} isCreatePost={isCreatePost} />
      </ReactModal>
      <div className="main-view">
        <div className="post-container">
          {state.post.posts.map((post, index) => {
            return (
              <Link
                key={index}
                className="post-content"
                to={{
                  pathname: `/postview/${post.postId}`,
                  state: {
                    postId: post.postId,
                  },
                }}
              >
                {post.image && (
                  <>
                    <img
                      className="post-image"
                      src={post.image}
                      alt={post.title}
                    ></img>
                    <span className="post-description">{post.body}</span>
                  </>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostView;
