import React, { useState } from "react";
import "./AddPost.css";
import { auth, db } from "../../firebase";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addPost = async () => {
    await addDoc(collection(db, "posts"), {
      userId: auth.currentUser.uid,
      title: title,
      author: author,
      content: content,
      hashtags: [],
      image: "",
    })
      .then(() => {
        navigate("/my-posts");
      })
      .catch((error) => {
        setErrorCode(error.code);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="container">
      <h1 className="pb-2 page-header">Add Post</h1>
      <form onSubmit={handleSubmit(addPost)}>
        <div className="form-group py-2">
          <label htmlFor="title">Title: </label>
          <input
            className="form-control"
            id="title"
            value={title}
            type="text"
            {...register("title", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setTitle(e.target.value);
              },
            })}
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="author">Author: </label>
          <input
            className="form-control"
            id="author"
            value={author}
            type="text"
            {...register("author", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setAuthor(e.target.value);
              },
            })}
          />
        </div>
        <div className="form-group py-2">
          <label htmlFor="content">Content: </label>
          <textarea
            id="content"
            value={content}
            type="text"
            className="form-control content-area"
            {...register("content", {
              required: "This field is required.",
              onChange: (e) => {
                e.preventDefault();
                setContent(e.target.value);
              },
            })}
          />
        </div>
        <div className="form-group py-2">
          <input
            type="file"
            className="form-control"
            value={file}
            {...register("file", {
              onChange: (e) => {
                e.preventDefault();
                setFile(e.target.files[0]);
              },
            })}
          />
          <button
            className="main-btn mt-2 prevent-submit p-2"
            type="submit"
            name="upload"
          >
            Upload
          </button>
        </div>

        <div className="form-group py-2">
          {fileUrl && (
            <div>
              <img src={fileUrl} className="uploaded-img" alt="uploaded-img" />
            </div>
          )}
        </div>
        <div className="form-group py-2">
          <label htmlFor="hashtag">Hashtags: </label>
          <input
            className="form-control"
            id="hashtag"
            value={hashtag}
            type="text"
            {...register("hashtag", {
              onChange: (e) => {
                e.preventDefault();
                setHashtag(e.target.value);
              },
            })}
          />
        </div>
        <button
          type="submit"
          name="add"
          className="main-btn prevent-submit p-2"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
