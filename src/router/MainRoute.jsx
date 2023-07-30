import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Home = lazy(() => import("../pages/Home/Home.jsx"));
const Login = lazy(() => import("../pages/Login/Login.jsx"));
const Register = lazy(() => import("../pages/Register/Register.jsx"));
const AddPost = lazy(() => import("../pages/AddPost/AddPost.jsx"));
const MyPosts = lazy(() => import("../pages/MyPosts/MyPosts.jsx"));

const MainRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/my-posts" element={<MyPosts />} />
      <Route exact path="/add-post" element={<AddPost />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoute;
