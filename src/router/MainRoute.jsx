import React from "react";
import Home from "../pages/Home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
import AddPost from "../pages/AddPost/AddPost.jsx";
import MyPosts from "../pages/MyPosts/MyPosts.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

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
