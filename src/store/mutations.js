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
      tables.push({
        name: table.name,
      });
    });

    state.tables = tables;

    state.userRefreshed = false;
  },

  deleteItem(state, item) {
    for (const prop in state.menuItems) {
      for (
        let i = 0;
        i < state.menuItems.prop.length;
        i++
      ) {
        if (item.name === state.menuItems.prop[i].name) {
          prop.splice(i, 1);
        }
      }
    }
    console.log('state', state.menuItems);
    console.log('item', item);
  },
};
