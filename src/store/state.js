export default {
  user: null,
  token: null,
  restaurantInfo: {},
  menuItems: {
    food: [
      {
        id: 1,
        name: 'Classic Bacon Burger',
      },
      {
        id: 2,
        name: 'Classic Bacon Burger',
      },
    ],
    drinks: [
      {
        id: 3,
        name: 'Classic Bacon Burger',
      },
      {
        id: 4,
        name: 'Classic Bacon Burger',
      },
    ],
    desserts: [
      {
        id: 6,
        name: 'Classic Bacon Burger',
      },
    ],
  },
  orders: [
    {
      orderId: '112',
      orderItems: [
        {
          name: 'Classic Bacon Burger',
          quantity: 1,
          // special instructions
        },
        {
          name: 'Classic Bacon Burger',
          quantity: 2,
          // special instructions
        },
      ],
      table: 37,
    },
    {
      orderId: '113',
      orderItems: [
        {
          name: 'Classic Bacon Burger',
          quantity: 1,
          // special instructions
        },
        {
          name: 'Classic Bacon Burger',
          quantity: 2,
          // special instructions
        },
      ],
      table: 37,
    },
    {
      orderId: '114',
      orderItems: [
        {
          name: 'Classic Bacon Burger',
          quantity: 1,
          // special instructions
        },
        {
          name: 'Classic Bacon Burger',
          quantity: 2,
          // special instructions
        },
      ],
      table: 37,
    },
  ],
};
