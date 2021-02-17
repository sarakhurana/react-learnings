import { useContext } from "react";
import { Context } from "../../context/Context";
import { fetchPosts } from "../../store/actions";
import "./createPost.css";

const GetPosts = () => {
  const { dispatch } = useContext(Context);

  return <button className ="btn-create-post" onClick={() => fetchPosts(dispatch)}>Get Posts</button>;
};

export default GetPosts;