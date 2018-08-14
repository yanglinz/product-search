import React from "react";
import { Link } from "react-router-dom";

import logoSmall from "../assets/logo-small.svg";
import githubLogo from "../assets/github.svg";
import "./header.css";

function Header(props) {
  const ghLink = "https://github.com/yanglinz/product-search";
  return (
    <div className="Header container-fluid">
      <div className="row middle-xs">
        <div className="Header-brand col-xs-3">
          <h1 className="Header-logo">
            <Link to="/">
              <img className="Header-logo-img" src={logoSmall} alt="Walmart" />
            </Link>
          </h1>
        </div>

        <div className="Header-main col-xs-6">{props.children}</div>

        <div className="Header-github col-xs-3">
          <a href={ghLink} target="_blank">
            <span className="Header-github-text">Source</span>
            <span className="Header-github-logo">
              <img src={githubLogo} height="11" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
