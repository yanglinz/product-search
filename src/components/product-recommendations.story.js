// @flow

import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import { Container } from "../../.storybook/helper";
import ProductRecommendation from "./product-recommendations";

const defaultProps = {
  recommendedProducts: [
    {
      itemId: "123",
      name: "Some Product",
      mediumImage:
        "https://i5.walmartimages.com/asr/6fca43e4-052c-43de-9009-478dcc2c00c9_1.a50d81821ae86a50014a2cf7c841effb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      shortDescription: "Here's some description",
      salePrice: 123.45
    },
    {
      itemId: "456",
      name: "Another Product",
      mediumImage:
        "https://i5.walmartimages.com/asr/6fca43e4-052c-43de-9009-478dcc2c00c9_1.a50d81821ae86a50014a2cf7c841effb.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      shortDescription: "Here's the other description",
      salePrice: 123.45
    }
  ]
};

storiesOf("ProductRecommendation", module)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => (
    <Container>
      <ProductRecommendation {...defaultProps} />
    </Container>
  ));
