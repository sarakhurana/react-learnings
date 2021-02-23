import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../../context/Context";
import { favouritePost } from "../../store/actions";
import classnames from "classnames";
import "./favouritePost.css";

const FavouritePost = ({postId}) => {
  const { dispatch } = useContext(Context);
  const [isFavourite, setFavourite] = useState(false);

  const handleFavouriteClick=()=>{
    setFavourite(!isFavourite)
    dispatch(favouritePost(postId));
  };
  return (
    <div
      className={classnames("btn-favourite", { "btn-favourite-active": isFavourite })}
      onClick={() =>handleFavouriteClick()}
    >
    </div>
  );
};

export default FavouritePost;
