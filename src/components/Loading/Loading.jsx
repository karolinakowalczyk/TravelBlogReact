import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-light p-5">
        <div className="container-fluid">
          <p className="navbar-brand">
            360 <span>&#176;</span> TRAVEL INSPIRATIONS
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
