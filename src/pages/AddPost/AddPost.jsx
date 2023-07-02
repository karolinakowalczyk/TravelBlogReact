import React, { useState } from "react";
import "./AddPost.css";
import { useForm } from "react-hook-form";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [hashtag, setHashtag] = useState("");

  const addPost = (data) => {
    console.log("add post");
    console.log(data);
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
          <label htmlFor="hashtag">Hashtags:</label>
          <input
            value={hashtag}
            className="form-control"
            type="text"
            id="hashtag-input"
            {...register("hashtag")}
          />
          <div className="d-flex flex-row flex-wrap hashtags-container"></div>
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
