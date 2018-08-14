import React from "react";
import { Link } from "react-router-dom";

import "./product-detail.css";

function ProductDetail(props) {
  const { itemId, name, largeImage, shortDescription, salePrice } = props;

  return (
    <div className="ProductDetail container-fluid">
      <div className="row">
        <div className="ProductDetail-thumb">
          <Link to={`/product/${itemId}`}>
            <img
              className="ProductDetail-thumb-img"
              src={largeImage}
              alt={name}
            />
          </Link>
        </div>

        <div className="ProductDetail-content">
          <h3 className="ProductDetail-title">
            <Link to={`/product/${itemId}`}>{name}</Link>
          </h3>
          <div className="ProductDetail-price">${salePrice.toFixed(2)}</div>
        </div>
      </div>

      <div className="row">
        <div className="ProductDetail-description">{shortDescription}</div>
      </div>
    </div>
  );
}

export default ProductDetail;
