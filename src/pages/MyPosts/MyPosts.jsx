import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const displayPosts = posts.map((post, index) => (
    <div className="card m-3 my-post-card" key={index}>
      {post.image ? (
        <img className="card-img-top" src={post.image} alt="post img" />
      ) : (
        <img
          className="card-img-top"
          src="https://img.icons8.com/ios-filled/50/null/no-image.png"
          alt="post no img"
        />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.author}</p>

        <button className="main-btn p-1 mt-auto">
          <Link to={"/"} className="main-href">
            See post
          </Link>
        </button>
      </div>
    </div>
  ));

  const fetchMyPost = async () => {
    const res = [];
    console.log(auth.currentUser);
    //na początku auth.currentUser też jest null

    await getDocs(
      query(
        collection(db, "posts"),
        where("userId", "==", "gYZseG32rRNRgatJNmbqW07a4Nz1")
      )
    ).then((userPosts) =>
      userPosts.forEach((post) => {
        res.push({
          id: post.id,
          ...post.data(),
        });
      })
    );
    console.log(res);

    return res;
  };

  useEffect(() => {
    fetchMyPost();
  }, []);
  return (
    <div className="container d-flex flex-column align-items-center">
      <h1>My Posts</h1>
      <button className="main-btn p-3">
        <Link to={"/add-post"} className="main-href">
          Add new post
        </Link>
      </button>
      {posts && <div className="d-flex flex-wrap">{displayPosts}</div>}
    </div>
  );
};

export default MyPosts;
