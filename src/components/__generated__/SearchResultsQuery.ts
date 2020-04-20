/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchResultsQuery
// ====================================================

export interface SearchResultsQuery_searchMovies_poster {
  __typename: "Image";
  url: string;
}

export interface SearchResultsQuery_searchMovies {
  __typename: "Movie";
  id: string;
  title: string | null;
  releaseDate: string | null;
  poster: SearchResultsQuery_searchMovies_poster | null;
  overview: string | null;
  language: string | null;
}

export interface SearchResultsQuery {
  searchMovies: SearchResultsQuery_searchMovies[];
}

export interface SearchResultsQueryVariables {
  query: string;
  offset?: number | null;
}
