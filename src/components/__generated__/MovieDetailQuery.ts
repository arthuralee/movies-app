/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MovieDetailQuery
// ====================================================

export interface MovieDetailQuery_movie_genre {
  __typename: "Genre";
  name: string;
}

export interface MovieDetailQuery_movie_backdrop {
  __typename: "Image";
  url: string;
}

export interface MovieDetailQuery_movie_poster {
  __typename: "Image";
  url: string;
}

export interface MovieDetailQuery_movie_cast_profile {
  __typename: "Image";
  url: string;
}

export interface MovieDetailQuery_movie_cast {
  __typename: "CastMember";
  name: string;
  profile: MovieDetailQuery_movie_cast_profile | null;
  order: number;
}

export interface MovieDetailQuery_movie {
  __typename: "Movie";
  title: string;
  releaseDate: string;
  genre: MovieDetailQuery_movie_genre[] | null;
  backdrop: MovieDetailQuery_movie_backdrop | null;
  poster: MovieDetailQuery_movie_poster | null;
  overview: string;
  cast: MovieDetailQuery_movie_cast[] | null;
  language: string;
}

export interface MovieDetailQuery {
  movie: MovieDetailQuery_movie | null;
}

export interface MovieDetailQueryVariables {
  id: string;
}
