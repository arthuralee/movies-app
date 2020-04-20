import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";
import React from "react";

import "./App.css";
import Movies from "./components/PopularMovies";

const cache = new InMemoryCache();
const link = new HttpLink();

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <h1>Movies App</h1>
        </header>
        Search
        <Movies />
      </div>
    </ApolloProvider>
  );
}

export default App;
