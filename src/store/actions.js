import gql from 'graphql-tag';
import graphqlClient from '../graphql';
import * as QUERY from './queries';

export default {
  async apolloQuery({ commit }, args) {
    const query = QUERY[args.queryName](args.data);

    if (args.queryType === 'query') {
      var response = await graphqlClient.query({
        query: gql`
          ${query}
        `,
      });

      await commit(args.queryName, response.data);
    }

    if (args.queryType === 'mutation') {
      var response2 = await graphqlClient.mutate({
        mutation: gql`
          ${query}
        `,
      });
    }
  },
};
