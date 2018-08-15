import { configure } from "@storybook/react";

import "../src/base.styles.js";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src", true, /\.story\.jsx?$/));
}

configure(loadStories, module);
