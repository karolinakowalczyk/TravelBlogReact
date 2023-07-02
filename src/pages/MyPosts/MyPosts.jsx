import React from "react";
import { Link } from "react-router-dom";

const MyPosts = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>My Posts</h1>
      <button className="main-btn p-3">
        <Link to={"/add-post"} className="main-href">
          Add new post
        </Link>
      </button>
      <div className="d-flex flex-wrap">
        <p>posts</p>
      </div>
    </div>
  );
};

export default MyPosts;
