/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MovieListItemFragment
// ====================================================

export interface MovieListItemFragment_poster {
  __typename: "Image";
  url: string;
}

export interface MovieListItemFragment {
  __typename: "Movie";
  id: string;
  title: string | null;
  releaseDate: string | null;
  poster: MovieListItemFragment_poster | null;
  overview: string | null;
  language: string | null;
}
