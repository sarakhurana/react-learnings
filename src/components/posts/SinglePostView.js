import React from "react";

const SinglePostView = (post) => {
  return (
    <div className="post-content">
      <div className="post-title">{post.title} </div>
      <div className="post-image">
        {post.image && <img src={post.image} alt={post.title}></img>}
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
          <EditPost postId={post.postId} setIsEditPost={setIsEditPost} />
        </ReactModal>
      </div>
    </div>
  );
};
