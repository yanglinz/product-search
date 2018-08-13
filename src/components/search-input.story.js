import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SearchInput from "./search-input";

storiesOf("SearchInput", module).add("default", () => (
  <SearchInput onSubmit={action("onSubmit")} />
));
