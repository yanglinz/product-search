import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const SEARCH_RESULTS_QUERY = gql`
  query SearchResultsQuery {
    searchProducts(query: "123") {
      itemId
      name
    }
  }
`;

function SearchResultList(props) {
  const { searchQuery } = props;

  return (
    <div>
      <h1>Search Results</h1>
      <h2>{searchQuery}</h2>

      <Query query={SEARCH_RESULTS_QUERY}>
        {({ loading, error, data }) => {
          const { searchProducts } = data || {};

          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div>
              {searchProducts.map(p => (
                <h2 key={p.itemId}>{p.name}</h2>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default SearchResultList;
