import ApolloClient from "apollo-boost";

const apolloClient = new ApolloClient({
  uri:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8000/graphql/"
      : "https://product-search-walmart.herokuapp.com/graphql/"
});

export default apolloClient;
