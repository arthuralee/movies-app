module.exports = {
  Query: {
    popularMovies(_, __, { dataSources }) {
      return dataSources.tmdb.getPopularMovies();
    },
    searchMovies(_, ctx, { dataSources }) {
      return dataSources.tmdb.searchMovies(ctx.query);
    },
    movie(_, ctx, { dataSources }) {
      return dataSources.tmdb.getMovieById(ctx.id);
    },
  },
  Movie: {
    releaseDate(movie) {
      return movie.release_date;
    },
    genre(movie, _, { dataSources }) {
      if (movie.genres) {
        return movie.genres;
      } else if (movie.genre_ids) {
        return dataSources.tmdb.getGenresByIds(movie.genre_ids);
      }
    },
    backdrop(movie) {
      if (movie.backdrop_path) {
        return { path: movie.backdrop_path, type: "backdrop" };
      }
      return null;
    },
    poster(movie) {
      if (movie.poster_path) {
        return { path: movie.poster_path, type: "poster" };
      }
      return null;
    },
    cast(movie, _, { dataSources }) {
      return dataSources.tmdb.getCastByMovieId(movie.id);
    },
  },
  Image: {
    url(img, _, { dataSources }) {
      return dataSources.tmdb.getImageFromPath(img);
    },
  },
  CastMember: {
    profile(castMember) {
      if (castMember.profile_path) {
        return { path: castMember.profile_path, type: "profile" };
      }
      return null;
    },
  },
};
