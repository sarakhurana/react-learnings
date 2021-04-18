import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { createPost } from "../../store/actions";
import { Formik, Form, Field } from 'formik';
import uuid from "react-uuid";
import "./createPost.css";

const CreatePost = ({isCreatePost, setCreatePost}) => {
  const { dispatch } = useContext(Context);

  const handleDispatchClick = (postTitle, postBody) => {
    dispatch(
      createPost({
        title: postTitle,
        body: postBody,
        postId: uuid(),
        isFavourite: false,
        isEditMode: false,
      })
    )
    setCreatePost(false)
  };
  return (
    <>
      {isCreatePost ? (
        <div className="create-post-container">
          <Formik
          initialValues={{ title: '', post: '' }}
          onSubmit={(values) => {
            handleDispatchClick(values.title, values.post);
          }}
        >
         {({ isSubmitting }) => (
         <Form>
           <label>Title</label>
           <Field className="text-post-title" data-testid="test-post-title" type="text" name="title" />
           <label>Post</label>
           <Field className="text-post-body" data-testid="test-post-body" type="text" name="post" />
           <button className="btn-post" type="submit" disabled={isSubmitting}>
             Post
           </button>
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
