// @flow

import React from "react";
import { MemoryRouter as Router } from "react-router-dom";
import { storiesOf } from "@storybook/react";

import Header from "./header";

storiesOf("Header", module)
  .addDecorator(story => <Router initialEntries={["/"]}>{story()}</Router>)
  .add("default", () => <Header />)
  .add("with children", () => (
    <Header>
      <h1 style={{ textAlign: "center" }}>Hello world!</h1>
    </Header>
  ));
