import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    nextFetchPolicy: 'cache-only'
  }
};

export const nielsenClient = new ApolloClient({
  cache,
  defaultOptions,
  uri: 'api/graphql/nielsen'
});

export const videoAmpClient = new ApolloClient({
  cache,
  defaultOptions,
  uri: 'api/graphql/video-amp'
});
