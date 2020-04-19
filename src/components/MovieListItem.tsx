import React from "react";
import { Movie } from "./MovieList";

export default function MovieListItem({ movie }: { movie: Movie }) {
  return (
    <div>
      <p>{movie.title}</p>
      <p>{movie.genre_ids}</p>
      <p>{movie.id}</p>
      <p>{movie.id}</p>
      <p>{movie.id}</p>
      <p>{movie.id}</p>
    </div>
  );
}
