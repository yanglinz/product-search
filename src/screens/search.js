import React from "react";
import * as Qs from "qs";
import gql from "graphql-tag";
import { Link, withRouter } from "react-router-dom";
import { Query } from "react-apollo";

import Header from "../components/header";

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
    <div>
      <h1>Search Results for "{searchQuery}"</h1>

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
    </div>
  );
}

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
        <Header />

        <h1>Search</h1>

        <SearchResultList searchQuery={searchQuery} />
      </div>
    );
  }
}

export default withRouter(SearchScreen);
