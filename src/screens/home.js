import React from "react";
import { withRouter } from "react-router-dom";

import logo from "../assets/logo.svg";

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
      <img src={logo} alt="Walmart" />

      <SearchInput history={history} />
    </div>
  );
}

export default withRouter(HomeScreen);
