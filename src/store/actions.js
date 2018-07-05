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
          console.log('>>>>>>', data);
          let customer;
          let notification;
          if (data.data.onCustomerCallsWaiter) {
            customer = data.data.onCustomerCallsWaiter.userName
              ? data.data.onCustomerCallsWaiter.userName
              : '';
            notification = customer + ' is calling for a waiter';
          }
          if (data.data.onCustomerConnection) {
            customer = data.data.onCustomerConnection.userName
              ? `${data.data.onCustomerConnection.userName}`
              : '';
            notification = customer + ' is connected to a table';
          }
          if (data.data.onCustomerOrder) {
            customer = data.data.onCustomerOrder.userName
              ? ` from ${data.data.onCustomerOrder.userName}`
              : '';
            notification = 'New order' + customer;
          }

          addElement();
          function addElement() {
            var newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'notification');

            newDiv.innerHTML = `<i class="material-icons">error_outline</i>
            <span>&nbsp;&nbsp;&nbsp;${notification}</span>`;
            document.body.appendChild(newDiv);

            setTimeout(() => {
              document.body.removeChild(newDiv);
            }, 7000);
          }
        },
      });
  },
};
