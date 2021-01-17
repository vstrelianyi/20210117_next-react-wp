import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const uri = `${ process.env.NEXT_PUBLIC_WORDPRESS_URL }/graphql`;

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
  },
};

const cache = new InMemoryCache( {
  resultCaching: false,
} );

const link = createHttpLink( {
  uri: uri,
} );

const client = new ApolloClient( {
  link,
  cache,
  defaultOptions,
} );

export default client;
