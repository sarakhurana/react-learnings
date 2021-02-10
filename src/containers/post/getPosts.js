import { useContext } from "react";
import { Context } from "../../context/Context";
import { fetchPosts } from "../../store/actions";

export const getPosts = () => {
  const { dispatch } = useContext(Context);
  fetchPosts(dispatch);
};
