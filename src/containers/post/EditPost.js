import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import { editPost } from "../../store/actions";
import { Formik, Form, Field } from 'formik';
import "./createPost.css";
import UploadImage from "../../components/posts/UploadImage";
import { isEmpty } from "lodash";

const EditPost = ({ post, setIsEditPost }) => {
  const { dispatch } = useContext(Context);
  const [image, setImage] = useState(post.image);
    
  const handleEditClick=(postBody)=>{
    setIsEditPost(false)
    dispatch(editPost({ body: postBody, image: image, postId: post.postId, isEditMode: false}))
  }
  return (
    <div className="create-post-container">
        <Formik
          initialValues={{ post: post.body}}
          onSubmit={(values) => {
            handleEditClick(values.post);
          }}
        >
         {({ values }) => (
         <Form>
           <label>Edit your post</label>
           <UploadImage image={image} setImage={setImage}/>
           <Field className="text-post-body" type="text" name="post"/>
           <div className="btn-container">
           <button className="btn-post" type="submit" disabled={isEmpty(values.post)}>
             Save Post
           </button>
           </div>
         </Form>
       )}
          </Formik>
    </div> 
  );
};

export default EditPost;
