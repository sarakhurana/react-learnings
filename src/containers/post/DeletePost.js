import { useContext } from "react";
import { Context } from "../../context/Context";
import { deletePost } from "../../store/actions";
import "./createPost.css";

const DeletePost = (postId) => {
  const { dispatch } = useContext(Context);

  return <button className ="btn-create-post" onClick={() => dispatch(deletePost(postId))}>Delete Post</button>;
};

export default DeletePost;