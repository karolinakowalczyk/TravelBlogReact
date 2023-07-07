import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { auth, db, storage } from "../../firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlloading, setUrlLoading] = useState(false);
  const [url, setUrl] = useState("");

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

  const getImage = async (location) => {
    return await getDownloadURL(ref(storage, location));
  };

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
          const urlArr = [];
          userPosts.forEach(async (post, index) => {
            if (post.data().image) {
              setUrlLoading(true);
              getImage(`images/${post.data().image}`).then((imgurl) => {
                //post.data().image = imgurl;
                setUrl(imgurl);
                //why is it not with new value...?
                //console.log(post.data().image);
                //console.log(imgurl);
                setUrlLoading(false);
              });
            } else {
              setUrlLoading(true);
              //post.data().image = "";
              setUrl("");
              setUrlLoading(false);
            }
            if (!urlloading) {
              postsData.push({
                id: post.id,
                author: post.data().author,
                content: post.data().content,
                hashtags: post.data().hashtags,
                image: url,
                title: post.data().title,
                userId: post.data().userId,
                //...post.data(),
              });
            }
          });
        });
      }

      setLoading(false);
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
