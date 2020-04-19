import React from "react";
import MovieListItem from "./MovieListItem";

export interface Movie {
  id: number;
}

export default function MovieList({ movies }: { movies: Array<Movie> }) {
  return (
    <div>
      {movies.map((movie) => (
        <MovieListItem movie={movie} />
      ))}
    </div>
  );
}
