import React, { useContext, useEffect } from "react";
import CreatePost from "../../containers/post/CreatePost";
import { getPosts } from "../../containers/post/getPosts";
import { Context } from "../../context/Context";
import { fetchPosts } from "../../store/actions";
import "./postView.css";

const PostView = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(()=>{
    console.log("object")
  },[state])
  const getAllPosts= () => {
     getPosts()
  };

  return (
    <div className="post-view-container">
      <CreatePost />
      <div className="post-container">
        {state.post.posts.map((post,index) => {
          return (
            <li key={index}>
              <div className="post-title">{post.title} </div>
              <div className="post-body">{post.body}</div>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
