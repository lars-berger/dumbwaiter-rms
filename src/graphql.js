import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import config from './config';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: `${config.serverURI}/graphql`,
});

export default new ApolloClient({
  // Provide the URL to the API server.
  link: authLink.concat(httpLink),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});
