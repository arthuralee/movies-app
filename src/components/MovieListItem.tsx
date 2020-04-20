import React from "react";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import "./MovieListItem.css";
import { MovieListItemFragment } from "./__generated__/MovieListItemFragment";
import Image from "./Image";
import { formatDate } from "../util";

export const movieListItemFragment = gql`
  fragment MovieListItemFragment on Movie {
    id
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
    <Link to={`/movie/${movie.id}`} className="movie-list-item">
      <Image src={movie.poster?.url} alt={movie.title} />
      <div className="details">
        <h1>{movie.title}</h1>
        <p>
          <span className="label">Language:</span> {movie.language}
        </p>
        <p>
          <span className="label">Released:</span>{" "}
          {formatDate(movie.releaseDate)}
        </p>
      </div>
    </Link>
  );
}
