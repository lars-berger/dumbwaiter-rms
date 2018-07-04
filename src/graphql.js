import config from './config';
import { split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  console.log('my token >', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

const wsLink = new WebSocketLink({
  uri: `${config.webSocketURI}/subscriptions`,
  options: {
    reconnect: true,
    connectionParams: {
      token: localStorage.getItem('token'),
    },
  },
});

// Create an http link:
const httpLink = createHttpLink({
  uri: `${config.serverURI}/graphql`,
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  authLink.concat(wsLink),
  authLink.concat(httpLink)
);

const cache = new InMemoryCache();
export default new ApolloClient({
  link,
  cache,
  defaultOptions: defaultOptions,
});
