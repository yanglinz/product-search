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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.props.value || this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchInput;
