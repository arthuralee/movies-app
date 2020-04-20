import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { PopularMoviesQuery } from "./__generated__/PopularMoviesQuery";
import MovieList, { movieListFragment } from "./MovieList";
import Loading from "./Loading";

const popularMoviesQuery = gql`
  query PopularMoviesQuery {
    popularMovies {
      ...MovieListFragment
    }
  }
  ${movieListFragment}
`;

export default function PopularMovies() {
  const { data, loading } = useQuery<PopularMoviesQuery>(popularMoviesQuery);

  return (
    <div>
      <h2>Popular movies today</h2>
      {loading ? (
        <Loading />
      ) : data && data.popularMovies ? (
        <MovieList movies={data.popularMovies} />
      ) : null}
    </div>
  );
}
