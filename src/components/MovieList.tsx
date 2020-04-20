import React from "react";
import gql from "graphql-tag";
import MovieListItem, { movieListItemFragment } from "./MovieListItem";
import { MovieListFragment } from "./__generated__/MovieListFragment";
import "./MovieList.css";

export const movieListFragment = gql`
  fragment MovieListFragment on Movie {
    id
    ...MovieListItemFragment
  }
  ${movieListItemFragment}
`;

export default function MovieList({ movies }: { movies: MovieListFragment[] }) {
  return movies.length > 0 ? (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieListItem movie={movie} key={movie.id} />
      ))}
    </div>
  ) : (
    <p>No results</p>
  );
}
