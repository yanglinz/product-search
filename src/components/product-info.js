import React from "react";
import { Link } from "react-router-dom";

import "./product-info.css";

function ProductInfo(props) {
  const { itemId, name, largeImage, shortDescription, salePrice } = props;

  return (
    <div className="ProductInfo container-fluid">
      <div className="row">
        <div className="ProductInfo-thumb">
          <Link to={`/product/${itemId}`}>
            <img
              className="ProductInfo-thumb-img"
              src={largeImage}
              alt={name}
            />
          </Link>
        </div>

        <div className="ProductInfo-content">
          <h3 className="ProductInfo-title">
            <Link to={`/product/${itemId}`}>{name}</Link>
          </h3>
          <div className="ProductInfo-price">${salePrice.toFixed(2)}</div>
        </div>
      </div>

      <div className="row">
        <div className="ProductInfo-description">{shortDescription}</div>
      </div>
    </div>
  );
}

export default ProductInfo;
