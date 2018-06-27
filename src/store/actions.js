import gql from 'graphql-tag';
import graphqlClient from '../graphql';

export default {
  async fetchRestaurantData({ commit }, id) {
    let response = await graphqlClient.query({
      query: gql`
        {
          restaurant(id: ${id}) {
            id
            name
            description
            latitude
            longitude
            photos {
              url
            }
            tables {
              name
              positionX
              positionY
            }
            products {
              name
              price
              categories {
                name
              }
              photos {
                url
              }
            }
          }
        }
      `,
    });
    await commit('SET_RESTAURANT_DATA', response.data);
  },
}
