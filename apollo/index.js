import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: process.env.apollo,
  cache: new InMemoryCache(),
});
