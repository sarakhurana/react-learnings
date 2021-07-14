import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { createPost } from "../../store/actions";
import { Formik, Form, Field } from "formik";
import uuid from "react-uuid";
import "./createPost.css";
import UploadImage from "../../components/posts/UploadImage";
import { isEmpty } from "lodash";
import { createPostService } from "../../services/CreatePostService";

const CreatePost = ({ isCreatePost, setCreatePost, getPosts }) => {
  const { dispatch } = useContext(Context);
  const [image, setImage] = useState(undefined);

  const handleCreatePost = async (postBody) => {
    const post = { postId: uuid(), body: postBody };
    const { result, error } = await createPostService(post);
    if (!error) setCreatePost(false);
    getPosts();
  };
  const handleDispatchClick = (postBody) => {
    dispatch(
      createPost({
        image: image,
        body: postBody,
        postId: uuid(),
        isFavourite: false,
        isEditMode: false,
      })
    );
    setCreatePost(false);
  };
  return (
    <>
      {isCreatePost ? (
        <div className="create-post-container">
          <Formik
            initialValues={{ post: "" }}
            onSubmit={(values) => {
              handleCreatePost(values.post);
              // handleDispatchClick(values.post);
            }}
          >
            {({ values }) => (
              <Form>
                <UploadImage image={image} setImage={setImage} />
                <Field
                  className="text-post-body"
                  data-testid="test-post-body"
                  type="text"
                  name="post"
                  placeholder="Enter your post"
                />
                <div className="btn-container">
                  <button
                    data-testid="test-create-post"
                    className="btn-post"
                    type="submit"
                    disabled={isEmpty(values.post)}
                  >
                    Post
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default CreatePost;
