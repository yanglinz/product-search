import React from "react";
import { Link } from "react-router-dom";

import logoSmall from "../assets/logo-small.svg";

import "./header.css";

function Header() {
  const ghLink = "https://github.com/yanglinz/product-search";
  return (
    <div className="Header">
      <div className="Header-brand">
        <h1 className="Header-logo">
          <Link to="/">
            <img className="Header-logo-img" src={logoSmall} alt="Walmart" />
          </Link>
        </h1>
      </div>

      <div className="Header-github">
        <a href={ghLink}>Source</a>
      </div>
    </div>
  );
}

export default Header;