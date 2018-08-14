import React from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Header from "../components/header";
import ProductInfo from "../components/product-info";

const PRODUCT_DETAIL_QUERY = gql`
  query ProductDetailQuery($itemId: ID!) {
    productDetail(id: $itemId) {
      itemId
      name
      largeImage
      shortDescription
      salePrice
      recommendedProducts {
        itemId
        name
        largeImage
        salePrice
      }
    }
  }
`;

function ProductScreen(props) {
  const { match } = props;
  const { itemId } = match.params;

  return (
    <div className="ProductScreen">
      <Header />

      <div className="SearchScreen-results container-fluid">
        <div className="row center-xs">
          <div className="col-xs-12">
            <Query query={PRODUCT_DETAIL_QUERY} variables={{ itemId }}>
              {({ loading, error, data }) => {
                const { productDetail } = data || {};

                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                return <ProductInfo {...productDetail} />;
              }}
            </Query>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductScreen);
