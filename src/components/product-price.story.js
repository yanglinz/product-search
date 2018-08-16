// @flow

import React from "react";
import { storiesOf } from "@storybook/react";

import ProductPrice from "./product-price";

storiesOf("ProductPrice", module)
  .add("default", () => <ProductPrice salePrice={42.99} msrp={142.99} />)
  .add("without msrp", () => <ProductPrice salePrice={42.99} />);
