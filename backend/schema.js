const { gql } = require("apollo-server");

module.exports = gql`
  type Genre {
    id: ID!
    name: String
  }
  type Image {
    url: String
  }
  type CastMember {
    id: ID!
    name: String
    profile: Image
    order: Int
  }
  type Movie {
    id: ID!
    title: String
    releaseDate: String
    genre: [Genre]
    backdrop: Image
    poster: Image
    overview: String
    cast: [CastMember]
  }

  type Query {
    popularMovies: [Movie]!
    searchMovies(query: String!): [Movie]!
    movie(id: ID!): Movie
  }
`;
