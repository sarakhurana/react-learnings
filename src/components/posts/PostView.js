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

  const handleClick = () => {
    setIsEditPost(!isEditPost);
  };
  useEffect(() => {
    if (!getPostRef.current) {
      fetchPosts(dispatch);
      getPostRef.current = true;
    }
  }, [getPostRef]);
  return (
    <div className="post-view-container">
      <CreatePost />
      <div className="post-container">
        {state.post.posts.map((post, index) => {
          return (
            <li key={index}>
              <div className="post-title">{post.title} </div>
              <div className="post-body">{post.body}</div>
              <DeletePost postId={post.postId} />
              <button className = "post-btn" onClick={handleClick}>Edit</button>
              {isEditPost && <EditPost postId={post.postId} />}
              <FavouritePost postId={post.postId} />
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
