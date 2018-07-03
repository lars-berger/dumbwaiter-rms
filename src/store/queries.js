const GET_RESTAURANT_DATA = function(id = 1) {
  return `
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
        id
        name
        activeCode {
          code
        }
      }
      products {
        id
        name
        price
        description
        categories {
          name
        }
        photos {
          url
        }
      }
    }
  }
  `;
};

const REGISTER_RESTAURANT = function(restaurant) {
  return `
  mutation {
    createRestaurant(
      name: "${restaurant.name}"
      latitude: "${restaurant.latitude}"
      longitude: "${restaurant.longitude}"
      type: "a"
      photo: "a"
      description: "a"
    ) {
      id
    }
  }
  `;
};

const REGISTER_OWNER = function(owner) {
  return `
  mutation {
    createOwner(
      name: "${owner.name}"
      password: "${owner.password}"
      email: "${owner.email}"
    ) {
      id
    }
  }
  `;
};

const DELETE_PRODUCT = function(id) {
  return `
  mutation {
    deleteProduct(
      id: ${Number(id)}
    ) {
      id
    }
  }
  `;
};

const ADD_PRODUCT = function(product) {
  return `
  mutation {
    createProduct(
      name: "${product.name}"
      description: "${product.description}"
      price: "${Number(product.price)}"
      photo: "https://www.prikentik.be/media/wysiwyg/streekbieren/PrikenTik-bier.jpg"
    ) {
      id
    }
  }
  `;
};

const ADD_CATEGORY_TO_PRODUCT = function(product) {
  return `
  mutation {
    addCategoryToProduct(
      id: ${Number(product.id)}
      categoryName: "${product.category}"
    ) {
      id
    }
  }
  `;
};

const ADD_TABLE = function(table) {
  return `
  mutation {
    addTable(
      name: "${table.number}"
      restaurantId: "1"
    ) {
      id
    }
  }
  `;
};

const UPDATE_TABLE = function(table) {
  return `
  mutation {
    deleteTable(
      id: ${Number(table.id)}
      positionX: ${table.x}
      positionY: ${table.y}
      width: ${table.width}
      height: ${table.height}
    ) {
      id
    }
  }
  `;
};

const DELETE_TABLE = function(id) {
  return `
  mutation {
    deleteTable(
      id: ${Number(id)}
    ) {
      id
    }
  }
  `;
};

const CONNECT_TABLE = function(id) {
  return `
  mutation {
    generateTableCode(id: "${id}") {
      activeCode {
        code
      }
    }
  }  
  `;
};

export {
  GET_RESTAURANT_DATA,
  REGISTER_RESTAURANT,
  REGISTER_OWNER,
  ADD_PRODUCT,
  ADD_CATEGORY_TO_PRODUCT,
  DELETE_PRODUCT,
  ADD_TABLE,
  DELETE_TABLE,
  CONNECT_TABLE,
};
