import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../components/header";
import logo from "../assets/logo.svg";
import "./home.css";

class SearchInput extends React.Component {
  state = {
    searchQuery: ""
  };

  handleChange = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    const { history } = this.props;

    const newPath = `/search?q=${searchQuery}`;
    history.push(newPath);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

function HomeScreen(props) {
  const { history } = props;

  return (
    <div className="HomeScreen">
      <Header />

      <div className="container-fluid">
        <div className="HomeScreen-brand row center-xs">
          <div className="col-xs-6">
            <img className="HomeScreen-logo" src={logo} alt="Walmart" />
          </div>
        </div>

        <div className="HomeScreen-search row center-xs">
          <div className="col-xs-6">
            <SearchInput history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeScreen);
