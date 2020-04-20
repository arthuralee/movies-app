import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useParams } from "react-router-dom";

import {
  MovieDetailQuery,
  MovieDetailQueryVariables,
} from "./__generated__/MovieDetailQuery";
import Image from "./Image";
import "./MovieDetail.css";
import GenrePills from "./GenrePills";
import CastMembers, { castMemberFragment } from "./CastMembers";

const movieDetailQuery = gql`
  query MovieDetailQuery($id: ID!) {
    movie(id: $id) {
      title
      releaseDate
      genre {
        name
      }
      backdrop {
        url
      }
      poster {
        url
      }
      overview
      cast {
        ...CastMemberFragment
      }
      language
    }
  }
  ${castMemberFragment}
`;

export default function MovieDetail() {
  const { movieId } = useParams();

  const { data, loading, error } = useQuery<
    MovieDetailQuery,
    MovieDetailQueryVariables
  >(movieDetailQuery, { variables: { id: movieId || "" } });

  return (
    <div>
      {data && data.movie ? (
        <>
          <div
            className="backdrop-container"
            style={{ backgroundImage: `url(${data.movie.backdrop?.url})` }}
          ></div>
          <div className="movie-detail-header">
            <div className="poster">
              <Image src={data.movie.poster?.url} alt={data.movie.title} />
            </div>
            <div>
              <h1>{data.movie.title}</h1>
              <p>
                Released:{" "}
                <span className="emphasis">{data.movie.releaseDate}</span>
              </p>
              <p>
                Language:{" "}
                <span className="emphasis">{data.movie.language}</span>
              </p>
            </div>
          </div>
          <div className="movie-detail-content">
            <h3>Overview</h3>
            <p>{data.movie.overview}</p>
            <h3>Genres</h3>
            <p>
              <GenrePills
                genres={data.movie.genre?.map((genre) => genre.name)}
              />
            </p>
            <h3>Cast</h3>
            <p>
              <CastMembers cast={data.movie.cast} />
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
}
