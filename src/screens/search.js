import React from "react";
import * as Qs from "qs";
import gql from "graphql-tag";
import { withRouter } from "react-router-dom";
import { Query } from "react-apollo";

import Header from "../components/header";
import Loading from "../components/loading";
import ServiceError from "../components/service-error";
import SearchInput from "../components/search-input";
import ProductInfo from "../components/product-info";
import "./search.css";

const SEARCH_RESULTS_QUERY = gql`
  query SearchResultsQuery($query: String!) {
    searchProducts(query: $query) {
      itemId
      name
      largeImage
      shortDescription
      salePrice
      msrp
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

        if (loading) return <Loading />;
        if (error)
          return (
            <ServiceError message="We could not load the search results." />
          );

        return (
          <div className="SearchResultList">
            {searchProducts.map(p => (
              <div className="SearchResultList-item" key={p.itemId}>
                <ProductInfo {...p} />
              </div>
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

        <div className="SearchScreen-results container-fluid">
          <div className="row center-xs">
            <div className="col-xs-12 col-sm-8 col-md-6">
              <SearchResultList searchQuery={searchValue} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchScreen);
