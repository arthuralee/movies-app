const { ApolloServer } = require("apollo-server");
const schema = require("./schema");
const resolvers = require("./resolvers");
const TmdbAPI = require("./tmdbDataSource");

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources: () => ({
    tmdb: new TmdbAPI(),
  }),
});

server.listen().then(({ url }) => {
  console.log("Server listening at " + url);
});
