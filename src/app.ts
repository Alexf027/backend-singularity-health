import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import sequelize from './config/database';
import './models';

const app = express();

async function startServer() {
  await sequelize.sync({ force: false });

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  server.applyMiddleware({ app });
  return app;
}

export default startServer;
