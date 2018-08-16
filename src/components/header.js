// @flow

import * as React from "react";
import { Link } from "react-router-dom";

import HeaderGithubLogo from "./header-github-logo";
import logoSmall from "../assets/logo-small.svg";
import "./header.css";

type HeaderProps = {
  children?: React.Node
};

function Header(props: HeaderProps) {
  const ghLink = "https://github.com/yanglinz/product-search";
  return (
    <div className="Header container-fluid">
      <div className="row middle-xs">
        <div className="Header-brand col-xs-3 col-md-2">
          <h1 className="Header-logo">
            <Link to="/">
              <img className="Header-logo-img" src={logoSmall} alt="Walmart" />
            </Link>
          </h1>
        </div>

        <div className="Header-main col-xs-6 col-md-8">{props.children}</div>

        <div className="Header-github col-xs-3 col-md-2 ">
          <a title="Source code on Github" href={ghLink} target="_blank">
            <HeaderGithubLogo width={16} height={16} fill="#444" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
