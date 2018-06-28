import gql from 'graphql-tag';
import graphqlClient from '../graphql';
import * as QUERY from './queries';


export default {
  async apolloQuery({ commit }, queryName, id = 1) {
    const query = QUERY[queryName](id);
    const response = await graphqlClient.query({
      query: gql`
        ${query}
      `,
    });
    console.log('>> imp', response)
    await commit('SET_RESTAURANT_DATA', response.data);
  },
}
