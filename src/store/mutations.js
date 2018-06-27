// mutations are synchronous - often used to set the data from an action

export default {
  SET_RESTAURANT_DATA(state, info) {
    const mains = [];
    const drinks = [];
    const desserts = [];

    const restaurantInfo = {
      name: info.restaurant[0].description,
      photos: info.restaurant[0].photos,
    };

    info.restaurant[0].products.map(product => {
      product.categorys.map(category => {
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
  },
  SET_USER(state, user) {
    state.user = user
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  // SET_MENU(state, menu) {
  //   state.menuItems = menu;
  // },
}