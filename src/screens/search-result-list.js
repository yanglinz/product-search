import React from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";

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

export default SearchResultList;
