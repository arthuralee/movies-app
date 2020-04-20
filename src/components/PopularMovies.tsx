import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { PopularMoviesQuery } from "./__generated__/PopularMoviesQuery";
import MovieList, { movieListFragment } from "./MovieList";

const popularMoviesQuery = gql`
  query PopularMoviesQuery {
    popularMovies {
      ...MovieListFragment
    }
  }
  ${movieListFragment}
`;

export default function PopularMovies() {
  const { data, loading, error, fetchMore } = useQuery<PopularMoviesQuery>(
    popularMoviesQuery
  );

  return (
    <div>
      <h2>Popular movies today</h2>
      {data && data.popularMovies ? (
        <MovieList movies={data.popularMovies} />
      ) : null}
    </div>
  );
}
