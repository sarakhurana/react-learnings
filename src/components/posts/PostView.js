import React, { useContext, useEffect, useRef } from "react";
import CreatePost from "../../containers/post/CreatePost";
import DeletePost from "../../containers/post/DeletePost";
import FavouritePost from "../../containers/post/FavouritePost";
import { Context } from "../../context/Context";
import "./postView.css";
import { fetchPosts} from "../../store/actions";

const PostView = () => {
  const { state, dispatch } = useContext(Context);
  const getPostRef=useRef(false)
  
  useEffect(()=>{
    if(!getPostRef.current)
      {
        fetchPosts(dispatch)
        getPostRef.current=true;
      }
  },[getPostRef])
  return (
    <div className="post-view-container">
      <CreatePost />
      <div className="post-container">
        {state.post.posts.map((post,index) => {
          return (
            <li key={index}>
              <div className="post-title">{post.title} </div>
              <div className="post-body">{post.body}</div>
              <DeletePost id={post.postId}/>
              <FavouritePost id={post.postId}/>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default PostView;
