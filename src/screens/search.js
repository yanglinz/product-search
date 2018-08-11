import React from "react";
import * as Qs from "qs";
import { withRouter } from "react-router-dom";

import SearchResultList from "./search-result-list";

class SearchScreen extends React.Component {
  state = {
    searchQuery: ""
  };

  componentDidMount() {
    const { location } = this.props;
    const queryParamsStr = location.search.replace("?", "");
    const queryParams = Qs.parse(queryParamsStr);
    const searchQuery = queryParams.q;
    this.setState({ searchQuery });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className="SearchScreen">
        <h1>Search</h1>

        <SearchResultList searchQuery={searchQuery} />
      </div>
    );
  }
}

export default withRouter(SearchScreen);
