const GET_RESTAURANT = function(id = 1) {
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

// const ADD_PRODUCT = function() {
//   return `
//   {
//     productRms {
//       id
//       name
//       description
//       price
//       categories {
//        id
//          name
//       }
//     }
//   }`;
// };
const ADD_PRODUCT = function(product) {
  console.log('>>>>>>>> product', product);
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

export { GET_RESTAURANT, ADD_PRODUCT };
