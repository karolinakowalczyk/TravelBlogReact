import React from "react";
import "./Footer.css";
import GitHubIcon from "../../assets/images/github-icon.png";

const Footer = () => {
  return (
    <footer>
      <a
        target="_blank"
        href="https://icons8.com/icon/CHdzWZyJzlf4/around-the-globe"
        rel="noreferrer"
      >
        Around the Globe
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <p>See us on: </p>
      <a
        target="_blank"
        href="https://github.com/karolinakowalczyk/TravelBlogReact"
        rel="noreferrer"
      >
        <img src={GitHubIcon} alt="github icon" />
      </a>
    </footer>
  );
};

export default Footer;
