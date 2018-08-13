import React from "react";

import "./search-input.css";

class SearchInput extends React.Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      e.preventDefault();
      onSubmit(this.state.value);
    }
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

export default SearchInput;
