import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://mascotapack-core.herokuapp.com/graphql',
  // uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
