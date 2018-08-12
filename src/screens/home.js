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

      <div className="HomeScreen-content">
        <div className="HomeScreen-brand">
          <img src={logo} alt="Walmart" />
        </div>

        <div className="HomeScreen-search">
          <SearchInput history={history} />
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeScreen);
