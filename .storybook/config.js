import { configure } from "@storybook/react";

import "./base.css";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

function loadStories() {
  requireAll(require.context("../src", true, /\.story\.jsx?$/));
}

configure(loadStories, module);
