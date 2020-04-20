import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import "./App.css";
import PopularMovies from "./components/PopularMovies";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import MovieDetail from "./components/MovieDetail";

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
            <Link to="/">
              <h1>Movies</h1>
            </Link>
          </header>
          <SearchBar />
          <Switch>
            <Route path="/search">
              <SearchResults />
            </Route>
            <Route path="/movie/:movieId">
              <MovieDetail />
            </Route>
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
