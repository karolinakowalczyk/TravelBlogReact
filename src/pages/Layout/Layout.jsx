import "./Layout.css";
import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light fixed-top bg-light p-5">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          360 <span>&#176;</span> TRAVEL INSPIRATIONS
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link" href="#">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/my-posts"} className="nav-link">
                My Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/"} className="nav-link">
                Log out
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Layout;
