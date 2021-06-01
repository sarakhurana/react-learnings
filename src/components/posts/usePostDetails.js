import { useContext } from "react";
import { Context } from "../../context/Context";

const usePostDetails = () => {
  const { state } = useContext(Context);
  console.log(state)
  const findPost = (postId) => {
    const index = state.post.posts.findIndex((p) => postId === p.postId);
    const post = state.post.posts[index];
    return post
  };

  return {
      findPost
  }
};

export default usePostDetails;
