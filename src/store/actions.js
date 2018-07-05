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

    function addElement() {
      // create a new div element
      var newDiv = document.createElement('div');
      newDiv.setAttribute('class', 'notification');
      newDiv.innerHTML = `<i class="material-icons">error_outline</i>
      <span>&nbsp;&nbsp;&nbsp;New order from Bob Bobson</span>`;
      // and give it some content
      // var newContent = document.createTextNode('Hi there and greetings!');
      // add the text node to the newly created div
      // newDiv.appendChild(newContent);

      // add the newly created element and its content into the DOM
      // var currentDiv = document.getElementById('div1');
      document.body.appendChild(newDiv);
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

          addElement();

          function addElement() {
            // create a new div element
            var newDiv = document.createElement('div');
            newDiv.setAttribute('class', 'notification');
            newDiv.innerHTML = `<i class="material-icons">error_outline</i>
            <span>&nbsp;&nbsp;&nbsp;New order from Bob Bobson</span>`;
            // and give it some content
            // var newContent = document.createTextNode('Hi there and greetings!');
            // add the text node to the newly created div
            // newDiv.appendChild(newContent);

            // add the newly created element and its content into the DOM
            // var currentDiv = document.getElementById('div1');
            document.body.appendChild(newDiv);
          }
          console.log(data);
        },
      });
  },
};
