// @flow

import * as React from "react";

import SearchInputIcon from "./search-input-icon";
import "./search-input.css";

type SearchInputProps = {
  value?: string,
  onChange?: string => void,
  onSubmit: string => void
};

type SearchInputState = {
  value: string
};

class SearchInput extends React.Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    const { value } = props;
    this.state = {
      value: value || ""
    };
  }

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const newValue = e.target.value;

    if (onChange) {
      onChange(newValue);
    } else {
      this.setState({ value: newValue });
    }
  };

  handleSubmit = (e: SyntheticEvent<HTMLButtonElement>) => {
    const { onSubmit } = this.props;

    if (onSubmit) {
      e.preventDefault();
      onSubmit(this.state.value);
    }
  };

  render() {
    return (
      <form className="SearchInput" onSubmit={this.handleSubmit}>
        <div className="SearchInput-wrap">
          <input
            className="SearchInput-input"
            type="text"
            value={this.props.value || this.state.value}
            onChange={this.handleChange}
          />
          <button className="SearchInput-button" type="submit">
            <SearchInputIcon width={15} height={15} fill="#007dc6" />
          </button>
        </div>
      </form>
    );
  }
}

export default SearchInput;
