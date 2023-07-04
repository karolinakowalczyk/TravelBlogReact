import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const displayPosts = posts.map((post, index) => (
    <div className="card m-3 my-post-card" key={index}>
      {console.log(post)}
      {post.imageUrl ? (
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
    const postsData = [];
    auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        await getDocs(
          query(
            collection(db, "posts"),
            where("userId", "==", auth.currentUser.uid)
          )
        ).then((userPosts) => {
          const imgUrls = [];
          userPosts.forEach((post) => {
            if (post.data().image.length > 0) {
              const storageRef = ref(storage, `images/${post.data().image}`);
              const uploadTask = uploadBytesResumable(storageRef, post);

              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                imgUrls.push(downloadURL);
              });
            } else {
              imgUrls.push("");
            }
            postsData.push({
              id: post.id,
              ...post.data(),
            });
          });
        });

        setLoading(false);
      }
    });

    setPosts(postsData);
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
      {loading ? (
        <div className="spinner-border" role="status"></div>
      ) : (
        displayPosts
      )}
    </div>
  );
};

export default MyPosts;
