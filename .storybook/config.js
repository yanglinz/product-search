import { configure } from "@storybook/react";

import "normalize.css/normalize.css";
import "flexboxgrid/css/flexboxgrid.css";
import "./base.css";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src", true, /\.story\.jsx?$/));
}

configure(loadStories, module);
