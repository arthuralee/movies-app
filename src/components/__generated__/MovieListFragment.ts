/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MovieListFragment
// ====================================================

export interface MovieListFragment_poster {
  __typename: "Image";
  url: string;
}

export interface MovieListFragment {
  __typename: "Movie";
  id: string;
  title: string | null;
  releaseDate: string | null;
  poster: MovieListFragment_poster | null;
  overview: string | null;
  language: string | null;
}
