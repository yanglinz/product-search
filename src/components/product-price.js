import React from "react";

import "./product-price.css";

export function shouldDisplayMsrp(salePrice, msrp) {
  if (!msrp) {
    return false;
  }

  if (msrp < salePrice) {
    return false;
  }

  return salePrice / msrp < 0.98;
}

function ProductPrice(props) {
  const { msrp, salePrice } = props;

  return (
    <div className="ProductPrice">
      <span className="ProductPrice-price">${salePrice.toFixed(2)}</span>
      {shouldDisplayMsrp(salePrice, msrp) ? (
        <React.Fragment>
          <span className="ProductPrice-spacing"> List </span>
          <span className="ProductPrice-msrp">${msrp.toFixed(2)}</span>
        </React.Fragment>
      ) : null}
    </div>
  );
}

export default ProductPrice;
