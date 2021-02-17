import React, { useContext, useEffect } from "react";
import CreatePost from "../../containers/post/CreatePost";
import GetPosts from "../../containers/post/GetPosts";
import DeletePost from "../../containers/post/DeletePost";
import { Context } from "../../context/Context";
import "./postView.css";

const PostView = () => {
  const { state, dispatch } = useContext(Context);

  // useEffect(()=>{
  //   console.log("object")
  // },[state])
  // const getAllPosts= () => {
  //    getPosts()
  // };

  return (
    <div className="post-view-container">
      <GetPosts/>
      <CreatePost />
      <div className="post-container">
        {state.post.posts.map((post,index) => {
          return (
            <li key={index}>
              <div className="post-title">{post.title} </div>
              <div className="post-body">{post.body}</div>
              <DeletePost id={post.postId}/>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
