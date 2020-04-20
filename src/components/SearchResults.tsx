import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import {
  SearchResultsQuery,
  SearchResultsQueryVariables,
} from "./__generated__/SearchResultsQuery";
import MovieList, { movieListFragment } from "./MovieList";
import { getSearchQ } from "../util";
import { useHistory } from "react-router-dom";
import Loading from "./Loading";

const searchResultsQuery = gql`
  query SearchResultsQuery($query: String!) {
    searchMovies(query: $query) {
      ...MovieListFragment
    }
  }
  ${movieListFragment}
`;

export default function SearchResults() {
  const history = useHistory();
  const searchQ = getSearchQ(history);

  const { data, loading, fetchMore } = useQuery<
    SearchResultsQuery,
    SearchResultsQueryVariables
  >(searchResultsQuery, { variables: { query: searchQ } });

  return (
    <div>
      <h2>Results for "{searchQ}"</h2>
      {loading ? (
        <Loading />
      ) : data && data.searchMovies ? (
        <MovieList movies={data.searchMovies} />
      ) : null}
    </div>
  );
}
