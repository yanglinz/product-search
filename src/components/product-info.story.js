import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import ProductInfo from "./product-info";

const defaultProps = {
  itemId: "123",
  name: "Some Product",
  largeImage:
    "https://i5.walmartimages.com/asr/6fca43e4-052c-43de-9009-478dcc2c00c9_1.a50d81821ae86a50014a2cf7c841effb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
  shortDescription: "Here's some description",
  salePrice: 123.45
};

function Container(props) {
  return (
    <div style={{ width: props.width || 600, margin: "0 auto" }}>
      {props.children}
    </div>
  );
}

storiesOf("ProductInfo", module)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => (
    <Container>
      <ProductInfo {...defaultProps} />
    </Container>
  ));
