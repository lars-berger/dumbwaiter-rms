import gql from 'graphql-tag';
import graphqlClient from '../graphql';
import * as QUERY from './queries';

export default {
  async apolloQuery({ commit }, args) {
    const query = QUERY[args.queryName](args.data);

    if (args.queryName !== 'ADD_PRODUCT') {
      var response = await graphqlClient.query({
        query: gql`
          ${query}
        `,
      });
      await commit('SET_RESTAURANT_DATA', response.data);
    }

    if (args.queryName === 'ADD_PRODUCT') {
      var response2 = await graphqlClient.mutate({
        mutation: gql`
          ${query}
        `,
      });
      console.log('>> imp ', response2);
    }
  },
};
