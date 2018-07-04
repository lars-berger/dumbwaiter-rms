// mutations are synchronous - often used to set the data from an action

export default {
  GET_RESTAURANT_DATA(state, info) {
    console.log('all restaurant data', info);
    const mains = [];
    const drinks = [];
    const desserts = [];

    const restaurantInfo = {
      name: info.restaurant[0].description,
      photos: info.restaurant[0].photos,
    };

    // console.log('null?', info.restaurant[0].products[0]);

    info.restaurant[0].products.map(product => {
      product.categories.map(category => {
        if (category.name == 'drinks') {
          drinks.push(product);
        }
        if (category.name == 'desserts') {
          desserts.push(product);
        }
        if (category.name == 'mains') {
          mains.push(product);
        }
      });
    });

    state.restaurantInfo = restaurantInfo;
    state.menuItems.food = mains;
    state.menuItems.drinks = drinks;
    state.menuItems.desserts = desserts;

    const tables = [];

    info.restaurant[0].tables.map(table => {
      const code = table.activeCode[0] ? table.activeCode[0].code : null;
      tables.push({
        id: table.id,
        name: table.name,
        activeCode: code,
        width: table.width,
        height: table.height,
        positionX: table.positionX,
        positionY: table.positionY,
      });
    });

    state.tables = tables.slice(0, 3);

    state.userRefreshed = false;
  },
  ACTIVE_CONNECTION_DATA(state, info) {
    state.groupedOrders = info.connection;

    const activeOrders = [];
    info.connection.map(connection => {
      connection.orders.map(order => activeOrders.push(order));
    });
    console.log(activeOrders);
    state.activeOrders = activeOrders;
  },
};
