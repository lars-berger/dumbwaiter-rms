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

export {
  GET_RESTAURANT_DATA,
  ADD_PRODUCT,
  ADD_CATEGORY_TO_PRODUCT,
  DELETE_PRODUCT,
  ADD_TABLE,
};
