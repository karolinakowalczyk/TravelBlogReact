import React, { Suspense, lazy } from "react";
// import Home from "../pages/Home/Home.jsx";
// import Login from "../pages/Login/Login.jsx";
// import Register from "../pages/Register/Register.jsx";
// import AddPost from "../pages/AddPost/AddPost.jsx";
// import MyPosts from "../pages/MyPosts/MyPosts.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

const MainRoute = () => {
  const Home = lazy(() => import("../pages/Home/Home.jsx"));
  const Login = lazy(() => import("../pages/Login/Login.jsx"));
  const Register = lazy(() => import("../pages/Register/Register.jsx"));
  const AddPost = lazy(() => import("../pages/AddPost/AddPost.jsx"));
  const MyPosts = lazy(() => import("../pages/MyPosts/MyPosts.jsx"));
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/my-posts" element={<MyPosts />} />
        <Route exact path="/add-post" element={<AddPost />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
