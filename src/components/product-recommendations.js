import React from "react";
import { Link } from "react-router-dom";

import ProductPrice from "./product-price";
import "./product-recommendations.css";

function ProductRecommendation(props) {
  const { itemId, name, mediumImage, msrp, salePrice } = props;
  return (
    <div className="ProductRecommendation">
      <div className="row">
        <div className="ProductRecommendation-thumb col-xs-3">
          <Link to={`/product/${itemId}`}>
            <img
              className="ProductRecommendation-thumb-img"
              src={mediumImage}
              alt={name}
            />
          </Link>
        </div>

        <div className="ProductRecommendation-info col-xs-9">
          <div className="ProductRecommendation-title">
            <Link to={`/product/${itemId}`}>{name}</Link>
          </div>

          <div className="ProductRecommendation-price">
            <ProductPrice salePrice={salePrice} msrp={msrp} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductRecommendations(props) {
  const { recommendedProducts } = props;

  const hasRecommendedProducts =
    recommendedProducts && recommendedProducts.length;
  if (!hasRecommendedProducts) {
    return null;
  }

  return (
    <div className="ProductRecommendations container-fluid">
      <div className="row">
        <h4 className="ProductRecommendations-title">Customers also bought:</h4>

        {recommendedProducts.map(p => (
          <ProductRecommendation key={p.itemId} {...p} />
        ))}
      </div>
    </div>
  );
}

export default ProductRecommendations;
