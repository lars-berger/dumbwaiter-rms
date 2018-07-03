<template>
  <div class="orders-container">
    <div @click="toggleModal('complete')" v-for="order in orders" :key="order.id" class="order">
      <div class="order-header">
        <h4 class="order-header-orderid">Order #{{order.id}}</h4>
        <div class="order-header-timestamp">
          <i class="material-icons">access_time</i>
          <span>{{formatTimestamp(order.createdAt)}}</span>
        </div>
      </div>
      <hr class="order-header-underline">
      
      <div class="order-buttons">
        <span class="order-table"></span>
        <a @click="markComplete" href="#"><i class="material-icons">check</i>COMPLETE</a>
      </div>

      <div class="order-items-container">
      <div v-for="(item, index) in order.products" :key="index" class="order-item">
        <img class="order-item-img" :src="item.product.photos[0].url" alt="" srcset="">
        <div class="order-item-text">
          <p class="order-item-name">{{item.product.name}}</p>
          <p v-if="item.extraInfo">{{item.extraInfo}}</p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orders: Array,
    toggleModal: Function,
  },
  data: function() {
    return {
      asdf: new Date(),
    };
  },
  methods: {
    markComplete() {
      console.log('mark all items in order as complete');
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      const difference = {};

      const differenceInMilli = Date.now() - date;
      if (Math.floor(differenceInMilli / 60 / 1000 < 1)) {
        return 'now';
      }

      difference.year = Math.floor(differenceInMilli / 365 / 24 / 60 / 60 / 1000);
      difference.month = Math.floor(differenceInMilli / 4 / 7 / 24 / 60 / 60 / 1000);
      difference.week = Math.floor(differenceInMilli / 7 / 24 / 60 / 60 / 1000);
      difference.day = Math.floor(differenceInMilli / 24 / 60 / 60 / 1000);
      difference.hour = Math.floor(differenceInMilli / 60 / 60 / 1000);
      difference.min = Math.floor(differenceInMilli / 60 / 1000);
      difference.second = Math.floor(differenceInMilli / 1000);

      const keys = Object.keys(difference);

      for (let i = 0; i < keys.length - 1; i++) {
        if (difference[keys[i]] !== 0) {
          if (difference[keys[i]] > 1.1) {
            return `${difference[keys[i]]} ${keys[i]}s ago`;
          } else {
            return `${difference[keys[i]]} ${keys[i]} ago`;
          }
        }
      }
    },
  },
};
</script>
