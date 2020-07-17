import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://mascotapack-core.herokuapp.com/graphql',
  cache: new InMemoryCache()
});