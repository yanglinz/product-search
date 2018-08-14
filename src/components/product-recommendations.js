import React from "react";
import { Link } from "react-router-dom";

import "./product-recommendations.css";

function ProductRecommendation(props) {
  const { itemId, name } = props;
  return (
    <div className="ProductRecommendation">
      <Link to={`/product/${itemId}`}>{name}</Link>
    </div>
  );
}

function ProductRecommendations(props) {
  const { recommendedProducts } = props;

  if (!recommendedProducts) {
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
