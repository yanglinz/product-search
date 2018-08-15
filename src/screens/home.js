import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../components/header";
import SearchInput from "../components/search-input";
import logo from "../assets/logo.svg";
import "./home.css";

class HomeScreen extends React.Component {
  handleSubmit = searchQuery => {
    const { history } = this.props;

    const newPath = `/search?q=${searchQuery}`;
    history.push(newPath);
  };

  render() {
    return (
      <div className="HomeScreen">
        <Header />

        <div className="container-fluid">
          <div className="HomeScreen-brand row center-xs">
            <div className="col-xs-6 col-md-4">
              <img className="HomeScreen-logo" src={logo} alt="Walmart" />
            </div>
          </div>

          <div className="HomeScreen-search row center-xs">
            <div className="col-xs-10 col-md-6">
              <SearchInput onSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(HomeScreen);
