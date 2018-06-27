import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({
    uri: 'http://192.168.1.222:2018/graphql',
  }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});