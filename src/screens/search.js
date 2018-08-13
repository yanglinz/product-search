import React from "react";
import * as Qs from "qs";
import gql from "graphql-tag";
import { Link, withRouter } from "react-router-dom";
import { Query } from "react-apollo";

import Header from "../components/header";
import SearchInput from "../components/search-input";

const SEARCH_RESULTS_QUERY = gql`
  query SearchResultsQuery($query: String!) {
    searchProducts(query: $query) {
      itemId
      name
    }
  }
`;

function SearchResultList(props) {
  const { searchQuery } = props;

  if (!searchQuery) {
    return null;
  }

  return (
    <Query query={SEARCH_RESULTS_QUERY} variables={{ query: searchQuery }}>
      {({ loading, error, data }) => {
        const { searchProducts } = data || {};

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div>
            {searchProducts.map(p => (
              <h2 key={p.itemId}>
                <Link to={`/product/${p.itemId}`}>{p.name}</Link>
              </h2>
            ))}
          </div>
        );
      }}
    </Query>
  );
}

class SearchScreen extends React.Component {
  state = {
    inputValue: "",
    searchValue: ""
  };

  handleChange = inputValue => {
    this.setState({ inputValue });
  };

  handleSubmit = () => {
    const { history } = this.props;
    const { inputValue } = this.state;

    this.setState({ searchValue: inputValue });

    const newPath = `/search?q=${inputValue}`;
    history.push(newPath);
  };

  componentDidMount() {
    const { location } = this.props;
    const queryParamsStr = location.search.replace("?", "");
    const queryParams = Qs.parse(queryParamsStr);
    this.setState({
      inputValue: queryParams.q,
      searchValue: queryParams.q
    });
  }

  render() {
    const { inputValue, searchValue } = this.state;

    return (
      <div className="SearchScreen">
        <Header>
          <SearchInput
            value={inputValue}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </Header>

        <SearchResultList searchQuery={searchValue} />
      </div>
    );
  }
}

export default withRouter(SearchScreen);
