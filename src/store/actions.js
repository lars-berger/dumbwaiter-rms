import gql from 'graphql-tag';
import graphqlClient from '../graphql';
import * as QUERY from './queries';

export default {
  async apolloQuery({ commit }, args) {
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
    console.log('>> response from query', response);
    return await response.data;
  },
};
