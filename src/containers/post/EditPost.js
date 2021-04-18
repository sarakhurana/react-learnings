import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { editPost } from "../../store/actions";
import { Formik, Form, Field } from 'formik';
import "./createPost.css";

const EditPost = ({ postId, setIsEditPost}) => {
  const { dispatch } = useContext(Context);
  
  const handleEditClick=(postTitle, postBody)=>{
    setIsEditPost(false)
    dispatch(editPost({ title: postTitle, body: postBody, postId: postId, isEditMode: false}))
  }
  return (
    <div className="create-post-container">
        <Formik
          initialValues={{ title: '', post: '' }}
          onSubmit={(values) => {
            handleEditClick(values.title, values.post);
          }}
        >
         {({ isSubmitting }) => (
         <Form>
           <label>Title</label>
           <Field className="text-post-title" type="text" name="title" />
           <label>Post</label>
           <Field className="text-post-body" type="text" name="post" />
           <button className="btn-post" type="submit" disabled={isSubmitting}>
             Save Post
           </button>
         </Form>
       )}
          </Formik>
      {/* <label>Title</label>
      <input
        className="text-post-title"
        type="text"
        name="Title"
        placeholder="Enter Title"
        onChange={(event) => setPostTitle(event.target.value)}
      ></input>
      <input
        className="text-post-body"
        name="Post"
        placeholder="Enter Post"
        onChange={(event) => setPostBody(event.target.value)}
      ></input>
      <button
        className="btn-post"
        onClick={handleEditClick}
      >
        Save Post
      </button> */}
    </div> 
  );
};

export default EditPost;
