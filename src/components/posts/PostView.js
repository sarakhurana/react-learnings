import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import CreatePost from "../../containers/post/CreatePost";
import { Context } from "../../context/Context";
import "./postView.css";
import { fetchPosts, getPosts } from "../../store/actions";
import ReactModal from "react-modal";
import { Link } from "react-router-dom";
import { getPostService } from "../../services/GetPostsService";

const PostView = () => {
  const { state, dispatch } = useContext(Context);
  const getPostRef = useRef(false);
  const [isCreatePost, setCreatePost] = useState(false);
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);

  const handleCreatePostClick = () => {
    setCreatePost(true);
  };

  const getPosts = useCallback(async () => {
    const { error, result } = await getPostService();
    console.log(result);
    if (!error) setPosts(result);
    else setError(error);
  });

  useEffect(async () => {
    if (!getPostRef.current) {
      getPosts();
      // fetchPosts(dispatch);
      getPostRef.current = true;
    }
  }, [getPostRef]);
  return (
    <div className="post-view-container">
      <div className="header">
        <div className="header-title-elements">
          <div className="lady"></div>
          <div className="title"></div>
          <div className="likes-photo"></div>
        </div>
        <div className="header-create-post">
          <button
            className="btn-create-post"
            data-testid="test-create-button"
            onClick={handleCreatePostClick}
          >
            Create Post
          </button>
        </div>
      </div>
      <ReactModal
        className="modal-container"
        overlayClassName="modal-overlay"
        isOpen={isCreatePost}
        ariaHideApp={false}
        onRequestClose={() => setCreatePost(false)}
      >
        <CreatePost setCreatePost={setCreatePost} isCreatePost={isCreatePost} getPosts={getPosts}/>
      </ReactModal>
      <div className="main-view">
        <div className="post-container">
          {posts &&
            posts.map((post, index) => {
              return (
                <div key={index}>{post.body}</div>
                // <Link
                //   key={index}
                //   className="post-content"
                //   to={{
                //     pathname: `/postview/${post.postId}`,
                //     state: {
                //       postId: post.postId,
                //     },
                //   }}
                // >
                //   {post && (
                //     <>
                //       {post.image && <img
                //         className="post-image"
                //         src={post.image}
                //         alt={post.title}
                //       ></img>}
                //       <span className="post-description">{post.body}</span>
                //     </>
                //   )}
                // </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default PostView;
