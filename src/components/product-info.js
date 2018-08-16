// @flow

import * as React from "react";
import { Link } from "react-router-dom";

import ProductPrice from "./product-price";
import "./product-info.css";

type ProductInfoProps = {
  itemId: string,
  name: string,
  largeImage: string,
  shortDescription: string,
  salePrice: number,
  msrp?: number
};

function ProductInfo(props: ProductInfoProps) {
  const { itemId, name, largeImage, shortDescription, salePrice, msrp } = props;

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
          <div className="ProductInfo-price">
            <ProductPrice salePrice={salePrice} msrp={msrp} />
          </div>
        </div>
      </div>

      <div className="row">
        <div
          className="ProductInfo-description"
          dangerouslySetInnerHTML={{ __html: shortDescription }}
        />
      </div>
    </div>
  );
}

export default ProductInfo;
