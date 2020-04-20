import React from "react";
import gql from "graphql-tag";

import "./MovieListItem.css";
import { MovieListItemFragment } from "./__generated__/MovieListItemFragment";
import MoviePoster from "./MoviePoster";

export const movieListItemFragment = gql`
  fragment MovieListItemFragment on Movie {
    title
    releaseDate
    poster {
      url
    }
    overview
    language
  }
`;

export default function MovieListItem({
  movie,
}: {
  movie: MovieListItemFragment;
}) {
  return (
    <a className="movie-list-item" href="">
      <MoviePoster src={movie.poster?.url} alt={movie.title} />
      <div className="details">
        <h1>{movie.title}</h1>
        <p>
          <span className="label">Language:</span> {movie.language}
        </p>
        <p>
          <span className="label">Released:</span> {movie.releaseDate}
        </p>
      </div>
    </a>
  );
}
