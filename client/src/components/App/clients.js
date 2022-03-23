import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

export const nielsenClient = new ApolloClient({
  cache,
  uri: 'api/graphql/nielsen'
});

export const videoAmpClient = new ApolloClient({
  cache,
  uri: 'api/graphql/video-amp'
});
