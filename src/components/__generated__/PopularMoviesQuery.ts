/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PopularMoviesQuery
// ====================================================

export interface PopularMoviesQuery_popularMovies_poster {
  __typename: "Image";
  url: string;
}

export interface PopularMoviesQuery_popularMovies {
  __typename: "Movie";
  id: string;
  title: string | null;
  releaseDate: string | null;
  poster: PopularMoviesQuery_popularMovies_poster | null;
  overview: string | null;
  language: string | null;
}

export interface PopularMoviesQuery {
  popularMovies: PopularMoviesQuery_popularMovies[];
}
