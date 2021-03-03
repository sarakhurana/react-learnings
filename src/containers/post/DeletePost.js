import { useContext } from "react";
import { Context } from "../../context/Context";
import { deletePost } from "../../store/actions";
import "./createPost.css";

const DeletePost = ({postId}) => {
  const { dispatch } = useContext(Context);

  return <button className ="btn-create-post" data-testid="test-delete-btn" onClick={() => dispatch(deletePost(postId))}>Delete Post</button>;
};

export default DeletePost;