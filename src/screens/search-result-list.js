import React from "react";

function SearchResultList(props) {
  const { searchQuery } = props;

  return (
    <div>
      <h1>Search Results</h1>
      <h2>{searchQuery}</h2>
    </div>
  );
}

export default SearchResultList;
