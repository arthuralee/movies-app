const { RESTDataSource } = require("apollo-datasource-rest");

class TmdbAPI extends RESTDataSource {
  baseURL = "https://api.themoviedb.org/3/";

  willSendRequest(request) {
    request.params.set("api_key", "81cf5724048c60af012e30896e9f13a6");
  }

  async getPopularMovies() {
    const response = await this.get("movie/popular");
    return response.results;
  }

  async getGenreMap() {
    if (!this.genreMap) {
      this.genreMap = (async () => {
        const response = await this.get("genre/movie/list");
        const genreMap = {};
        response.genres.forEach((genre) => {
          genreMap[genre.id] = genre;
        });
        return genreMap;
      })();
    }
    return this.genreMap;
  }

  async getGenresByIds(ids) {
    const genreMap = await this.getGenreMap();
    return ids.map((id) => genreMap[id]);
  }

  async getImageFromPath(img) {
    // should be calling /configuration to get real URL
    // for simplicity, just going to hardcode full resolution
    // path
    let size = "original";
    if (img.type === "backdrop") {
      size = "w1280";
    } else if (img.type === "poster") {
      size = "w342";
    } else if (img.type === "profile") {
      size = "w185";
    } else {
      size = "original";
    }
    return `https://image.tmdb.org/t/p/${size}${img.path}`;
  }

  async getCastByMovieId(id) {
    const response = await this.get(`movie/${id}/credits`);
    return response.cast;
  }

  async searchMovies(query, offset) {
    const response = await this.get("search/movie", {
      query,
    });
    return response.results;
  }

  async getMovieById(id) {
    return await this.get(`/movie/${id}`);
  }
}

module.exports = TmdbAPI;
