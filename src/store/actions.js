import gql from 'graphql-tag';
import graphqlClient from '../graphql';
import * as QUERY from './queries';
import * as SUBSCRIPTION from './subscriptions';

export default {
  apolloQuery: async ({ commit }, args) => {
    const query = QUERY[args.queryName](args.data);

    let response;
    if (args.queryType === 'query') {
      response = await graphqlClient.query({
        query: gql`
          ${query}
        `,
      });

      await commit(args.queryName, response.data);
    }

    if (args.queryType === 'mutation') {
      response = await graphqlClient.mutate({
        mutation: gql`
          ${query}
        `,
      });
    }
    return await response.data;
  },
  apolloSubscription: async ({ commit }, args) => {
    const subscription = SUBSCRIPTION[args.queryName](args.data);

    return await graphqlClient
      .subscribe({
        query: gql`
          ${subscription}
        `,
        variables: {},
      })
      .subscribe({
        next(data) {
          console.log('Subscription response data');
          console.log(data);
        },
      });
  },
};
