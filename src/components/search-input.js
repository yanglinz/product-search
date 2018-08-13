import React from "react";

import "./search-input.css";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      value: value || ""
    };
  }

  handleChange = e => {
    const { onChange } = this.props;
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue);
    } else {
      this.setState({ value: newValue });
    }
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
      <form className="SearchInput" onSubmit={this.handleSubmit}>
        <input
          className="SearchInput-input"
          type="text"
          value={this.props.value || this.state.value}
          onChange={this.handleChange}
        />
        <input className="SearchInput-button" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchInput;
