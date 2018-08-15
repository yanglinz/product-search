import React from "react";
import { storiesOf } from "@storybook/react";

import ServiceError from "./service-error";

storiesOf("ServiceError", module).add("default", () => (
  <ServiceError message="This is some error message" />
));
