import startServer from './app';

startServer().then(app => {
  app.listen({ port: 4000 }, () => {
    console.log('GraphQL running at http://localhost:4000/graphql');
  });
});
