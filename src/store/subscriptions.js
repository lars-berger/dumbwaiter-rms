const ORDERS_SUBSCRIPTION = function({ id = 1 }) {
  return `
  subscription {
    onCustomerOrder(restaurantId: ${id}) {
      text
      userId
      connectionId
      orderId
    }
  }
  `;
};
const CONNECTIONS_SUBSCRIPTION = function({ id = 1 }) {
  return `
  subscription {
    onCustomerConnection(restaurantId: ${id}) {
      text
      userId
      connectionId
    }
  }
  `;
};
const WAITER_CALLS_SUBSCRIPTION = function({ id = 1 }) {
  return `
  subscription {
    onCustomerCallsWaiter(restaurantId: ${id}) {
      text
      userId
      userName
      tableCode
    }
  }
  `;
};

export { ORDERS_SUBSCRIPTION, CONNECTIONS_SUBSCRIPTION, WAITER_CALLS_SUBSCRIPTION };
