import React from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Header from "../components/header";

const PRODUCT_DETAIL_QUERY = gql`
  query ProductDetailQuery($itemId: ID!) {
    productDetail(id: $itemId) {
      itemId
      name
    }
  }
`;

function ProductScreen(props) {
  const { match } = props;
  const { itemId } = match.params;

  return (
    <div className="ProductScreen">
      <Header />

      <h1>Product</h1>

      <Query query={PRODUCT_DETAIL_QUERY} variables={{ itemId }}>
        {({ loading, error, data }) => {
          const { productDetail } = data || {};

          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (
            <div>
              <h1>{productDetail.name}</h1>
            </div>
          );
        }}
      </Query>
    </div>
  );
}

export default withRouter(ProductScreen);
