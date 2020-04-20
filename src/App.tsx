import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "./App.css";
import PopularMovies from "./components/PopularMovies";
import SearchBar from "./components/SearchBar";

const cache = new InMemoryCache();
const link = new HttpLink();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Movies App</h1>
          </header>
          <SearchBar />
          <Switch>
            <Route path="/search">Search route</Route>
            <Route path="/movie/:movieId">Movie detail</Route>
            <Route path="/">
              <PopularMovies />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
