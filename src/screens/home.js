import React from "react";
import { withRouter } from "react-router-dom";

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
        <label>
          Search:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function HomeScreen(props) {
  const { history } = props;

  return (
    <div className="HomeScreen">
      <h1>Home</h1>

      <SearchInput history={history} />
    </div>
  );
}

export default withRouter(HomeScreen);
