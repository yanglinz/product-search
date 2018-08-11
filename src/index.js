import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/home";
import SearchScreen from "./screens/search";
import ProductScreen from "./screens/product";
import apolloClient from "./graphql";

import "./index.css";

function AppRoutes() {
  return (
    <Router>
      <React.Fragment>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/search" component={SearchScreen} />
        <Route path="/product/:itemId" component={ProductScreen} />
      </React.Fragment>
    </Router>
  );
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={apolloClient}>
          <AppRoutes />
        </ApolloProvider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
