import React from "react";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import Header from "../components/header";
import Loading from "../components/loading";
import ServiceError from "../components/service-error";
import ProductInfo from "../components/product-info";
import ProductRecommendations from "../components/product-recommendations";
import "./product.css";

const PRODUCT_DETAIL_QUERY = gql`
  query ProductDetailQuery($itemId: ID!) {
    productDetail(id: $itemId) {
      itemId
      name
      largeImage
      shortDescription
      salePrice
      msrp
      recommendedProducts {
        itemId
        name
        mediumImage
        salePrice
        msrp
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
          <div className="col-xs-12 col-sm-8 col-md-6">
            <Query query={PRODUCT_DETAIL_QUERY} variables={{ itemId }}>
              {({ loading, error, data }) => {
                const { productDetail } = data || {};

                if (loading) return <Loading />;
                if (error)
                  return (
                    <ServiceError message="We could not find the item you were looking for." />
                  );

                return (
                  <div className="SearchScreen-content">
                    <ProductInfo {...productDetail} />
                    <ProductRecommendations {...productDetail} />
                  </div>
                );
              }}
            </Query>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ProductScreen);
