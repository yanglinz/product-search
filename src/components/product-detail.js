import React from "react";
import { Link } from "react-router-dom";

function ProductDetail(props) {
  const { itemId, name, mediumImage, shortDescription, salePrice } = props;

  return (
    <div className="ProductInfo">
      <div className="ProductInfo-thumb">
        <img src={mediumImage} alt={name} />
      </div>

      <div className="ProductInfo-title">
        <Link to={`/product/${itemId}`}>{name}</Link>
      </div>

      <div className="ProductInfo-description">{shortDescription}</div>
    </div>
  );
}

export default ProductDetail;
