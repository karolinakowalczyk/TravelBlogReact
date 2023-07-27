import React, { useState } from "react";
import "./AddPost.css";
import { auth, db, storage } from "../../firebase";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { v4 } from "uuid";

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
  const [fileName, setFileName] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [hashtag, setHashtag] = useState("");
  const [hashtags, setHashtags] = useState([]);
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addPostDoc = async () => {
    await addDoc(collection(db, "posts"), {
      userId: auth.currentUser.uid,
      title: title,
      author: author,
      content: content,
      hashtags: hashtags,
      image: fileName,
    })
      .then(() => {
        navigate("/my-posts");
      })
      .catch((error) => {
        setErrorCode(error.code);
        setErrorMessage(error.message);
      });
  };

  const addPost = async () => {
    if (fileName !== "") {
      const imageRef = ref(storage, `images/${fileName}`);
      await uploadBytes(imageRef, file).then(() => {
        addPostDoc();
      });
    } else {
      addPostDoc();
    }
  };

  const uploadImage = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileUrl(reader.result);
        setFileName(file.name + v4());
      };
      reader.readAsDataURL(file);
    } else {
      setFileUrl("");
      setFileName("");
    }
  };

  const addHashtag = (e) => {
    if (e.key === "Enter" && hashtag !== "" && !hashtags.includes(hashtag)) {
      let currentHashtags = [...hashtags];
      currentHashtags.push(hashtag);
      setHashtags(currentHashtags);
      setHashtag("");
    }
  };

  const removeHashtag = (e) => {
    let currentHashtags = [...hashtags];
    currentHashtags.splice(currentHashtags.indexOf(e.currentTarget.id), 1);
    setHashtags(currentHashtags);
  };

  const displayHashtags = hashtags.map((hashtag, index) => (
    <div key={index} className="hashtag-el">
      <p className="hashtag-p">#{hashtag}</p>
      <div onClick={removeHashtag} id={hashtag} className="hashtag-btn">
        X
      </div>
    </div>
  ));

  return (
    <div className="container">
      <Helmet>
        <title>Travel Blog Flask - Add New Post</title>
        <meta
          name="description"
          content="Where did you go last time? Share your travel experience and add new post!"
        />
      </Helmet>
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
            {...register("file", {
              onChange: (e) => {
                e.preventDefault();
                setFile(e.target.files[0]);
              },
            })}
          />
          <button
            className="main-btn mt-2 p-2"
            name="upload"
            onClick={uploadImage}
          >
            Upload
          </button>
        </div>

        <div className="form-group py-2">
          {fileUrl && (
            <img src={fileUrl} className="uploaded-img" alt="uploaded-img" />
          )}
        </div>
        <div className="form-group py-2">
          <label htmlFor="hashtag">Hashtags: </label>
          <input
            className="form-control"
            id="hashtag"
            value={hashtag}
            onKeyDown={addHashtag}
            type="text"
            {...register("hashtag", {
              onChange: (e) => {
                e.preventDefault();
                setHashtag(e.target.value);
              },
            })}
          />
        </div>
        <div className="d-flex flex-row flex-wrap">{displayHashtags}</div>
        <button type="submit" name="add" className="main-btn p-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPost;
